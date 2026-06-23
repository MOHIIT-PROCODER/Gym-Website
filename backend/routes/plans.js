const express = require("express")
const router = express.Router()

router.post("/select", (req,res)=>{

 const {plan} = req.body

 console.log("Selected Plan:", plan)

 res.json({
  message: plan + " plan selected"
 })

})

module.exports = router