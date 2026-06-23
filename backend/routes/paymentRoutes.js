// const express = require("express");
// const router = express.Router();
// const { createPayment } = require("../controllers/paymentController");

// router.post("/create", createPayment);

// module.exports = router;


const express = require("express");
const router = express.Router();

const {
  createOrder,
  savePayment
} = require("../controllers/paymentController");

const Payment = require("../models/Payment");


// Create Razorpay Order
router.post("/create", createOrder);


// Save Payment After Success
router.post("/save", savePayment);
router.post("/success", savePayment);


// Get All Payments (Admin Dashboard)
router.get("/all", async (req, res) => {

  try {

    const payments = await Payment.find().sort({ createdAt: -1 });

    res.json(payments);

  } catch (error) {

    res.status(500).json({
      message: "Failed to fetch payments",
      error: error.message
    });

  }

});


// Get Payments By User Email
router.get("/user/:email", async (req, res) => {

  try {

    const payments = await Payment.find({
      email: req.params.email
    });

    res.json(payments);

  } catch (error) {

    res.status(500).json({
      message: "Failed to fetch user payments"
    });

  }

});


module.exports = router;