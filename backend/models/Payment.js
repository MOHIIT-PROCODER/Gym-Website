const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({

  // -------------------
  // USER
  // -------------------

  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true,
    index:true
  },

  name:{
    type:String,
    required:true,
    trim:true
  },

  email:{
    type:String,
    required:true,
    trim:true,
    lowercase:true
  },

  phone:{
    type:String,
    required:true,
    trim:true
  },

  // -------------------
  // PLAN INFO
  // -------------------

  planName:{
    type:String,
    enum:["Basic","Pro","Elite"],
    required:true
  },

  planType:{
    type:String,
    enum:["Monthly","Yearly"],
    required:true
  },

  amount:{
    type:Number,
    required:true,
    min:0
  },

  currency:{
    type:String,
    default:"INR"
  },

  // -------------------
  // PAYMENT METHOD
  // -------------------

  paymentMethod:{
    type:String,
    enum:["Cash","UPI","Razorpay","Stripe"],
    default:"Cash"
  },

  // Razorpay / Stripe / UPI reference

  transactionId:{
    type:String,
    default:null
  },

  paymentId:{
    type:String,
    required:true,
    unique:true,
    index:true
  },

  gatewayOrderId:{
    type:String,
    default:null
  },

  // -------------------
  // PAYMENT STATUS
  // -------------------

  status:{
    type:String,
    enum:["Paid","Pending","Failed","Refunded"],
    default:"Paid"
  },

  // -------------------
  // MEMBERSHIP DATES
  // -------------------

  startDate:{
    type:Date,
    default:Date.now
  },

  expiryDate:{
    type:Date,
    required:true,
    index:true
  },

  // -------------------
  // RENEWAL TRACKING
  // -------------------

  isRenewal:{
    type:Boolean,
    default:false
  },

  previousPaymentId:{
    type:String,
    default:null
  },

  // -------------------
  // INVOICE
  // -------------------

  invoiceNumber:{
    type:String,
    default:null
  },

  invoiceUrl:{
    type:String,
    default:""
  },

  notes:{
    type:String,
    default:""
  }

},{
  timestamps:true
});

module.exports = mongoose.model("Payment",paymentSchema);