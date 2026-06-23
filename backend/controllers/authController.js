const User = require("../models/User");
const bcrypt = require("bcryptjs");


// REGISTER
const register = async (req, res) => {

  try {

    let { name, email, phone, password, address, bloodGroup } = req.body;

    // Handle empty phone number
    if (phone === "") {
      phone = undefined;
    }

    // Build the query dynamically
    const query = [{ email: email }];
    if (phone) {
      query.push({ phone: phone });
    }

    // Check existing user
    const existingUser = await User.findOne({
      $or: query
    });

    if (existingUser) {
      return res.status(400).json({
        message: "User with this email or phone already exists"
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      phone,
      password: hashedPassword,
      address,
      bloodGroup
    });

    await user.save();

    res.json({
      message: "User Registered Successfully",
      user
    });

  } catch (error) {

    res.status(500).json({
      message: "Registration failed",
      error: error.message
    });

  }

};


// LOGIN
const login = async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({
      $or: [
        { email: email },
        { phone: email }
      ]
    });

    if (!user) {
      return res.status(400).json({
        message: "User not found"
      });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(400).json({
        message: "Invalid password"
      });
    }

    res.json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        bloodGroup: user.bloodGroup,
        planName: user.planName,
        planType: user.planType,
        startDate: user.startDate,
        expiryDate: user.expiryDate,
        membershipStatus: user.membershipStatus
      }
    });

  } catch (error) {

    res.status(500).json({
      message: "Login failed",
      error: error.message
    });

  }

};





// FIREBASE GOOGLE LOGIN
const firebaseLogin = async (req, res) => {

  try {

    const { email, name, phone, firebaseUid } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    let user = await User.findOne({ email });

    if (!user) {
      user = new User({
        name: name || email.split("@")[0],
        email: email,
        phone: phone || undefined,
        role: "member",
        membershipStatus: "None"
      });
      await user.save();
    }

    res.json({
      message: "Google login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        bloodGroup: user.bloodGroup,
        planName: user.planName,
        planType: user.planType,
        startDate: user.startDate,
        expiryDate: user.expiryDate,
        membershipStatus: user.membershipStatus,
        role: user.role
      }
    });

  } catch (error) {

    console.error("Firebase login error:", error);
    res.status(500).json({
      message: "Google login failed",
      error: error.message
    });

  }

};


// UPDATE PROFILE
const updateProfile = async (req, res) => {
  try {
    const { email, name, phone, bloodGroup, height, weight, age, password } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required to update profile" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update allowed fields
    if (name) user.name = name;
    if (phone) user.phone = phone;
    if (bloodGroup) user.bloodGroup = bloodGroup;
    if (height !== undefined) user.height = height;
    if (weight !== undefined) user.weight = weight;
    if (age !== undefined) user.age = age;

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
    }

    await user.save();

    res.json({
      message: "Profile updated successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        bloodGroup: user.bloodGroup,
        height: user.height,
        weight: user.weight,
        age: user.age,
        planName: user.planName,
        planType: user.planType,
        startDate: user.startDate,
        expiryDate: user.expiryDate,
        membershipStatus: user.membershipStatus,
        role: user.role
      }
    });

  } catch (error) {
    console.error("Update profile error:", error);
    res.status(500).json({
      message: "Failed to update profile",
      error: error.message
    });
  }
};


// EXPORT
module.exports = {
  register,
  login,
  firebaseLogin,
  updateProfile
};