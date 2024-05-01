const batchModel = require("../models/batchModel");

exports.batchModel = async (req, res) => {
  try {
    const { batch, description, department } = req.body;
    const batchmodel = new batchModel({
      batch,
      description,
      department,
      status: true,
    });
    await batchmodel.save();
    res.status(201).json({ message: "Notice added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
