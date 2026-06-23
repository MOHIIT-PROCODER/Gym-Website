const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config({ path: "./.env" });

const User = require("./models/User");

async function checkUsers() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB");

    const users = await User.find({}).select("email phone password name role");
    console.log(`Found ${users.length} users.`);

    for (const user of users) {
      console.log(`\nUser: ${user.name} (${user.email || user.phone})`);
      console.log(`Password Hash: ${user.password ? user.password : "MISSING!"}`);
    }

  } catch (error) {
    console.error(error);
  } finally {
    mongoose.connection.close();
  }
}

checkUsers();
