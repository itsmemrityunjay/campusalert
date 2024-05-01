const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const UserModel = require("../models/userModel").UserModel;

exports.register = async (req, res) => {
  try {
    const { name, email, password, batch, admno, avatar } = req.body;

    const emailExist = await UserModel.findOne({ email: email });
    if (emailExist) {
      return res.status(400).json({ message: "Email already exists" });
    }
    let hashedPassword;
    try {
      const salt = await bcrypt.genSalt(10);
      hashedPassword = await bcrypt.hash(password, salt);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }

    const user = new UserModel({
      name,
      email,
      password: hashedPassword,
      batch,
      admno,
      avatar,
    });

    await user.save();
    let payload = {
      id: user._id,
      email: user.email,
      avatar: user.avatar,
      batch: user.batch,
    };
    let token = JWT.sign({ payload }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    let newUser = user.toObject();
    delete newUser.password;
    delete newUser.__v;
    newUser.token = token;
    res.status(201).json({
      token: token,
      message: "User registered successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
