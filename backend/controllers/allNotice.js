const tempNoticeModel = require("../models/noticeModel");

const allNotice = async (req, res) => {
  try {
    const notice = await tempNoticeModel.find();
    res.status(200).json({ notice });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { allNotice };
