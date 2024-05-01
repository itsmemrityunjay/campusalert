const CalenderModel = require("../models/Calender");

const getEvent = async (req, res) => {
  try {
    let query = {};
    if (req.query.month) {
      query = {
        ...query,
        date: { $regex: `^${req.query.month}`, $options: "i" },
      };
    }
    const response = await CalenderModel.find(query);
    res.json({ response });
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getEvent };
