const noticeModel = require("../models/noticeModel");

exports.addNotice = async (req, res) => {
  try {
    const { refno, date, title, description, category, amount, department } =
      req.body;
    const tempnotice = new noticeModel({
      refno,
      date,
      title,
      description,
      category,
      amount,
      department,
    });
    await tempnotice.save();
    res.status(201).json({ message: "Notice added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
