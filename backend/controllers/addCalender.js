const calenderModel = require("../models/Calender");

exports.calenderModel = async (req, res) => {
  try {
    const { date, day, event, description, category, department } = req.body;
    const calenderevent = new calenderModel({
      date,
      day,
      event,
      description,
      category,
      department,
    });
    await calenderevent.save();
    res.status(201).json({ message: "Notice added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
