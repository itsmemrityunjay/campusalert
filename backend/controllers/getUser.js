const { UserModel } = require("../models/userModel");

const getUser = async (req, res) => {
  try {
    const response = await UserModel.find();
    res.json({ response });
  } catch (error) {
    console.error("Error fetching user count:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getUser };
