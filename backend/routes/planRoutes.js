const express = require("express");
const router = express.Router();
const { createPlan, getPlans } = require("../controllers/planController");

router.post("/create", createPlan);
router.get("/all", getPlans);

module.exports = router;