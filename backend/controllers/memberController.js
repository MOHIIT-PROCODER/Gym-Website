const User = require("../models/User");

exports.getMembers = async (req, res) => {

  try {

    const members = await User.find({ role: "member" }).select("-password");

    const today = new Date();

    const updatedMembers = members.map(member => {

      let daysRemaining = null;
      let status = member.membershipStatus;

      if (member.expiryDate) {

        const diff = member.expiryDate - today;
        daysRemaining = Math.ceil(diff / (1000 * 60 * 60 * 24));

        if (daysRemaining <= 0) {
          status = "Expired";
        } else {
          status = "Active";
        }

      }

      return {
        _id: member._id,
        name: member.name,
        email: member.email,
        phone: member.phone,
        address: member.address,
        bloodGroup: member.bloodGroup,

        profileImage: member.profileImage,
        height: member.height,
        weight: member.weight,
        age: member.age,

        planName: member.planName,
        planType: member.planType,
        startDate: member.startDate,
        expiryDate: member.expiryDate,

        membershipStatus: status,
        daysRemaining: daysRemaining,

        paymentStatus: member.paymentStatus
      };

    });

    res.json(updatedMembers);

  } catch (error) {

    res.status(500).json({
      message: "Failed to fetch members",
      error: error.message
    });

  }

};