const batchModel = require("../models/batchModel");

exports.getBatch = async (req, res) => {
  try {
    const response = await batchModel.find();
    res.json({ response });
  } catch (error) {
    console.error("Error fetching user count:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.editBatch = async (req, res) => {
  try {
    const updatedbatch = await batchModel.findById(req.params.id);
    updatedbatch.active = !updatedbatch.active;
    await updatedbatch.save();
    res.json({ message: "Batch status updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

exports.deleteBatch = async (req, res) => {
  try {
    const deletedBatch = await batchModel.deleteOne({ _id: req.params.id });
    if (deletedBatch.deletedCount === 0) {
      return res.status(404).send("User not found");
    }
    res.send(deletedUser);
    console.log("User removed successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
