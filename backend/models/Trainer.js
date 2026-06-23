const mongoose = require("mongoose");

const trainerSchema = new mongoose.Schema({

 name: {
  type: String,
  required: true,
  trim: true
 },

 specialization: {
  type: String,
  required: true
 },

 phone: {
  type: String,
  required: true
 },

 email: {
  type: String,
  default: ""
 },

 experience: {
  type: Number, // years of experience
  default: 0
 },

 profileImage: {
  type: String, // image URL (Cloudinary / storage)
  default: ""
 },

 assignedMembers: [{
  type: mongoose.Schema.Types.ObjectId,
  ref: "User"
 }],

 status: {
  type: String,
  enum: ["active", "inactive"],
  default: "active"
 }

}, { timestamps: true });

module.exports = mongoose.model("Trainer", trainerSchema);