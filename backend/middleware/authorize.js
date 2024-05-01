const JWT = require("jsonwebtoken");
require("dotenv").config();

exports.authorize = (req, res, next) => {
  const token =
    req.body.token || req.header("Authorization").replace("Bearer ", "");
  try {
    if (!token) {
      return res
        .status(401)
        .json({ message: "No token, authorization denied" });
    }

    try {
      const decoded = JWT.verify(token, process.env.JWT_SECRET);
      req.user = decoded.payload;
    } catch (error) {
      res.status(401).json({ message: "Token is not valid" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  next();
};

exports.admin = (req, res, next) => {
  try {
    if (req.user.avatar !== "Admin") {
      return res.status(403).json({ message: "Not a Admin" });
    }
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.student = (req, res, next) => {
  try {
    if (req.user.avatar !== "Student") {
      return res.status(403).json({ message: "Not a Student" });
    }
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
