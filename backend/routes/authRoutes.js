const express = require("express");
const router = express.Router();

const { register, login, firebaseLogin, updateProfile } = require("../controllers/authController");

router.get("/", (req, res) => {
  res.send("Auth API working");
});

router.post("/register", register);
router.post("/login", login);
router.post("/firebase-login", firebaseLogin);
const User = require("../models/User");

router.get("/me/:email", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    res.json({ user });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch user" });
  }
});

router.put("/update-profile", updateProfile);

module.exports = router;