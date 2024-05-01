const { UserModel } = require("../models/userModel");

const userCount = async (req, res) => {
  try {
    const count = await UserModel.countDocuments();
    res.json({ count });
  } catch (error) {
    console.error("Error fetching user count:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { userCount };
