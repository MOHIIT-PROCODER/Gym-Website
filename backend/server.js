



// Fix: Force Node.js to use Google Public DNS for SRV record resolution
// (Local ISP DNS blocks MongoDB Atlas SRV queries)
const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const User = require("./models/User");


const app = express();

// CORS Configuration
const allowedOrigins = [
  "http://localhost:5173",
  "https://gym-website-84r2.onrender.com"
];

if (process.env.FRONTEND_URL) {
  allowedOrigins.push(process.env.FRONTEND_URL);
}

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, postman, or curl)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        return callback(new Error("CORS policy does not allow access from this origin."), false);
      }
      return callback(null, true);
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);
app.use(express.json());

// ROUTES
const adminRoutes = require("./routes/adminRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const planRoutes = require("./routes/planRoutes"); // Use DB plan routes
const authRoutes = require("./routes/authRoutes");

// API Routes
app.use("/api/admin", adminRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/plans", planRoutes);
app.use("/api/auth", authRoutes);

// MongoDB Connection
mongoose
.connect(process.env.MONGO_URL)
.then(async () => {

 console.log("MongoDB Connected");

 // CREATE DEFAULT ADMIN
 const adminEmail = process.env.ADMIN_EMAIL || "admin@fitips.com";
 const adminPassword = process.env.ADMIN_PASSWORD || "admin123";

 const adminExists = await User.findOne({ email: adminEmail });

 if (!adminExists) {

  const hashedPassword = await bcrypt.hash(adminPassword, 10);

  await User.create({
   name: "Admin",
   email: adminEmail,
   password: hashedPassword,
   role: "admin"
  });

  console.log("Default Admin Created");
 }

 // SEED DEFAULT PLANS
 const Plan = require("./models/Plan");
 const defaultPlans = [
  {
   name: "Basic",
   price: 999,
   duration: 30,
   description: "Access to workout programs & basic guide",
   features: [
    "Access to workout programs",
    "Basic nutrition guide",
    "Community access",
    "Email support"
   ],
   status: "active"
  },
  {
   name: "Pro",
   price: 1999,
   duration: 30,
   description: "Everything in Basic plus custom plan",
   features: [
    "Everything in Basic",
    "Personalized workout plan",
    "Custom diet plan",
    "Progress tracking",
    "Priority support"
   ],
   status: "active"
  },
  {
   name: "Elite",
   price: 3999,
   duration: 30,
   description: "1-on-1 coaching & elite support",
   features: [
    "Everything in Pro",
    "1-on-1 coaching",
    "Weekly video consultation",
    "Supplement guidance",
    "24/7 support"
   ],
   status: "active"
  }
 ];

 for (const planData of defaultPlans) {
  const planExists = await Plan.findOne({ name: planData.name });
  if (!planExists) {
   await Plan.create(planData);
   console.log(`Default Plan '${planData.name}' Seeded`);
  }
 }

 })
 .catch((err) => console.log(err));

// Test route
app.get("/", (req, res) => {
 res.send("Gym Management API Running");
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
 console.log("Server running on port", PORT);
});