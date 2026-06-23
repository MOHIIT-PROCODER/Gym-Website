const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

  name:{
    type:String,
    required:true,
    trim:true
  },

  email:{
    type:String,
    lowercase:true,
    trim:true,
    unique:true,
    sparse:true
  },

  password:{
    type:String,
    default:null   // NOT required (admin manual member)
  },

  phone:{
    type:String,
    required:false,
    unique:true,
    sparse:true,
    trim:true
  },

  address:{
  type:String,
  default:""
},

bloodGroup:{
  type:String,
  enum:["A+","A-","B+","B-","AB+","AB-","O+","O-"],
  default:null
},

dateOfBirth:{
  type:Date,
  default:null
},

  age:{
    type:Number,
    default:null
  },

  height:{
    type:Number, // cm
    default:null
  },

  weight:{
    type:Number, // kg
    default:null
  },

  profileImage:{
    type:String,  // Cloudflare / S3 URL
    default:""
  },

  // --------------------
  // MEMBERSHIP PLAN
  // --------------------

  planName:{
    type:String,
    enum:["Basic","Pro","Elite"],
    default:null
  },

  planType:{
    type:String,
    enum:["Monthly","Yearly"],
    default:null
  },

  startDate:{
    type:Date,
    default:null
  },

  expiryDate:{
    type:Date,
    default:null
  },

  membershipStatus:{
    type:String,
    enum:["Active","Expired","None"],
    default:"None"
  },

  // --------------------
  // PAYMENT
  // --------------------

  paymentStatus:{
    type:String,
    enum:["Pending","Success","Failed"],
    default:"Pending"
  },

  paymentId:{
    type:String,
    default:null
  },

  paymentMethod:{
    type:String,
    enum:["Razorpay","Cash","UPI"],
    default:null
  },

  // --------------------
  // GYM ACCESS SYSTEM
  // --------------------

  qrCode:{
    type:String,
    default:null
  },

  fingerprintId:{
    type:String,
    default:null
  },

  faceId:{
    type:String,
    default:null
  },

  // --------------------
  // ROLE
  // --------------------

  role:{
    type:String,
    enum:["member","admin"],
    default:"member"
  }

},{timestamps:true});

module.exports = mongoose.model("User",userSchema);