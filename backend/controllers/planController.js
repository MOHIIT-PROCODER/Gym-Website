const Plan = require("../models/Plan");

exports.createPlan = async (req, res) => {
  const plan = new Plan(req.body);
  await plan.save();
  res.json(plan);
};

exports.getPlans = async (req, res) => {
  const plans = await Plan.find();
  res.json(plans);
};