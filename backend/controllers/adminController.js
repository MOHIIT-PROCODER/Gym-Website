const Payment = require("../models/Payment");
const User = require("../models/User");
const Plan = require("../models/Plan");


// =============================
// GET ALL PAYMENTS (ADMIN)
// =============================
exports.getAllPayments = async (req, res) => {

 try {

  const payments = await Payment.find()
   .populate("userId", "name phone email")
   .populate("planId", "name price duration")
   .sort({ createdAt: -1 });

  const today = new Date();

  const updatedPayments = payments.map((p) => {

   if (!p.expiryDate) {
    return { ...p._doc, membershipStatus: "Unknown" };
   }

   const expiry = new Date(p.expiryDate);

   const diffDays = Math.ceil(
    (expiry - today) / (1000 * 60 * 60 * 24)
   );

   let membershipStatus = "Active";

   if (diffDays <= 0) membershipStatus = "Expired";
   else if (diffDays <= 3) membershipStatus = "Expiring Soon";

   return {
    ...p._doc,
    membershipStatus
   };

  });

  res.json(updatedPayments);

 } catch (error) {

  console.log(error);
  res.status(500).json({ message: "Error fetching payments" });

 }

};



// =============================
// APPROVE PAYMENT
// =============================
exports.approvePayment = async (req, res) => {

 try {

  const { id } = req.params;

  const payment = await Payment.findById(id);

  if (!payment) {
   return res.status(404).json({ message: "Payment not found" });
  }

  payment.status = "approved";

  await payment.save();

  res.json({ message: "Payment approved successfully" });

 } catch (error) {

  console.log(error);
  res.status(500).json({ message: "Error approving payment" });

 }

};



// =============================
// DELETE PAYMENT
// =============================
exports.deletePayment = async (req, res) => {

 try {

  const { id } = req.params;

  const payment = await Payment.findByIdAndDelete(id);

  if (!payment) {
   return res.status(404).json({ message: "Payment not found" });
  }

  res.json({ message: "Payment deleted successfully" });

 } catch (error) {

  console.log(error);
  res.status(500).json({ message: "Error deleting payment" });

 }

};



// =============================
// ADD MEMBER MANUALLY (ADMIN)
// =============================
exports.addMember = async (req, res) => {

 try {

  const { name, phone, email, planId, startDate } = req.body;

  const plan = await Plan.findById(planId);

  if (!plan) {
   return res.status(404).json({ message: "Plan not found" });
  }

  const start = new Date(startDate);

  const expiry = new Date(start);
  expiry.setDate(expiry.getDate() + plan.duration);

  const user = await User.create({
   name,
   phone,
   email,
   status: "active"
  });

  const payment = await Payment.create({

   userId: user._id,
   planId: plan._id,
   amount: plan.price,
   startDate: start,
   expiryDate: expiry,
   method: "cash",
   status: "approved"

  });

  res.json({
   message: "Member added successfully",
   user,
   payment
  });

 } catch (error) {

  console.log(error);
  res.status(500).json({ message: "Error adding member" });

 }

};



// =============================
// DASHBOARD STATS
// =============================
exports.dashboardStats = async (req, res) => {

 try {

  const totalUsers = await User.countDocuments();

  const activeMembers = await User.countDocuments({
   status: "active"
  });

  const expiredMembers = await User.countDocuments({
   status: "expired"
  });

  const payments = await Payment.find();

  const totalRevenue = payments.reduce((sum, p) => {
   return sum + (p.amount || 0);
  }, 0);

  const today = new Date().toISOString().slice(0,10);

  const todayPayments = payments.filter((p)=>
   p.createdAt.toISOString().slice(0,10) === today
  );

  res.json({

   totalUsers,
   activeMembers,
   expiredMembers,
   totalRevenue,
   todayPayments: todayPayments.length

  });

 } catch (error) {

  console.log(error);
  res.status(500).json({ message: "Error loading dashboard stats" });

 }

};