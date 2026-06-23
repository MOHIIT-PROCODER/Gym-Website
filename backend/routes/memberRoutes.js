const express = require("express");
const router = express.Router();
router.put("/update/:id", updateProfile);
const { getMembers } = require("../controllers/memberController");

router.get("/all", getMembers);

module.exports = router;