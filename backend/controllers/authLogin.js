const { UserModel } = require("../models/userModel");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
require("dotenv").config();

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }

    let user = await UserModel.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    let payload = {
      id: user._id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
    };

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      let token = JWT.sign({ payload }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      user = user.toObject();
      delete user.password;
      delete user.__v;
      user.token = token;
      return res.status(200).json({
        token: token,
        message: "User logged in successfully",
        user: user,
      });
    } else {
      return res.status(400).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
