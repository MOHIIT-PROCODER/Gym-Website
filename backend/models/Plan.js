const mongoose = require("mongoose");

const planSchema = new mongoose.Schema({

 name: {
  type: String,
  required: true,
  trim: true
 },

 price: {
  type: Number,
  required: true
 },

 duration: {
  type: Number, // duration in days
  required: true
 },

 description: {
  type: String,
  default: ""
 },

 features: {
  type: [String], // plan benefits
  default: []
 },

 status: {
  type: String,
  enum: ["active", "inactive"],
  default: "active"
 }

}, { timestamps: true });

module.exports = mongoose.model("Plan", planSchema);