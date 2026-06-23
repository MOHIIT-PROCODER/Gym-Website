const express = require("express");
const router = express.Router();

const Payment = require("../models/Payment");
const User = require("../models/User");

// ===============================
// ADMIN ADD MEMBER (CASH PAYMENT)
// ===============================
router.post("/add-member", async (req, res) => {
  try {

    const { name, phone, email, planName, planType, amount, bloodGroup, address, height, weight, age } = req.body;

    // VALIDATION
    if (!name || !phone || !email || !planName || !planType || !amount) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    // PLAN MONTHS
    let months = 1;

    if (planType === "Yearly") {
      months = 12;
    }

    const startDate = new Date();

    const expiryDate = new Date();
    expiryDate.setMonth(expiryDate.getMonth() + months);

    // CHECK IF USER EXISTS
    let user = await User.findOne({ email });

    if (!user) {

      user = new User({
        name,
        phone,
        email,
        planName,
        planType,
        startDate,
        expiryDate,
        bloodGroup,
        address,
        height,
        weight,
        age
      });

      await user.save();

    } else {

      // UPDATE PLAN IF USER EXISTS
      user.planName = planName;
      user.planType = planType;
      user.startDate = startDate;
      user.expiryDate = expiryDate;
      if(bloodGroup !== undefined) user.bloodGroup = bloodGroup;
      if(address !== undefined) user.address = address;
      if(height !== undefined) user.height = height;
      if(weight !== undefined) user.weight = weight;
      if(age !== undefined) user.age = age;

      await user.save();
    }

    // CREATE PAYMENT ENTRY
    const payment = new Payment({
      userId: user._id,
      name,
      phone,
      email,
      planName,
      planType,
      amount,
      paymentId: "CASH-" + Date.now(),
      startDate,
      expiryDate
    });

    await payment.save();

    res.status(201).json({
      success: true,
      message: "Member added successfully",
      user,
      payment
    });

  } catch (error) {

    console.log("ADD MEMBER ERROR:", error);

    res.status(500).json({
      message: "Server error while adding member"
    });
  }
});


// ===============================
// GET ALL USERS
// ===============================
router.get("/users", async (req, res) => {
  try {
    const users = await User.find({ role: "member" }).sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching users" });
  }
});

// ===============================
// GET ALL PAYMENTS
// ===============================
router.get("/payments", async (req, res) => {
  try {

    const payments = await Payment.find({ paymentId: { $ne: null, $exists: true } })
      .populate("userId", "name phone email bloodGroup address height weight age")
      .sort({ createdAt: -1 });

    res.status(200).json(payments);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Error fetching payments"
    });
  }
});


// ===============================
// ADMIN DASHBOARD STATS
// ===============================
router.get("/stats", async (req, res) => {
  try {
    const { startDate, endDate } = req.query;

    const totalMembers = await User.countDocuments();
    const today = new Date();

    const activeMembers = await User.countDocuments({
      expiryDate: { $gt: today }
    });

    const expiredMembers = await User.countDocuments({
      expiryDate: { $lte: today }
    });

    // Date range filter for revenue
    let dateFilter = {};
    if (startDate || endDate) {
      dateFilter.createdAt = {};
      if (startDate) {
        dateFilter.createdAt.$gte = new Date(startDate);
      }
      if (endDate) {
        const end = new Date(endDate);
        end.setHours(23, 59, 59, 999);
        dateFilter.createdAt.$lte = end;
      }
    }

    // Filtered payments for total revenue in selected range (ignoring corrupt test payments with no paymentId)
    const filteredPayments = await Payment.find({
      ...dateFilter,
      paymentId: { $ne: null, $exists: true }
    });
    const totalRevenue = filteredPayments.reduce((sum, p) => {
      return sum + (p.amount || 0);
    }, 0);

    // Monthly breakdown of all payments (ignoring corrupt test payments with no paymentId)
    const allPayments = await Payment.find({
      paymentId: { $ne: null, $exists: true }
    }).sort({ createdAt: 1 });
    const monthlyRevenue = {};
    allPayments.forEach(p => {
      if (p.createdAt) {
        const date = new Date(p.createdAt);
        const monthYear = date.toLocaleString("en-US", { month: "short", year: "numeric" });
        monthlyRevenue[monthYear] = (monthlyRevenue[monthYear] || 0) + (p.amount || 0);
      }
    });

    res.json({
      totalMembers,
      activeMembers,
      expiredMembers,
      totalRevenue,
      monthlyRevenue
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to fetch stats"
    });
  }
});

module.exports = router;