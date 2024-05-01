const { CalenderModel } = require("../models/Calender");

const deleteEvent = async (req, res) => {
  try {
    const deletedEvent = await CalenderModel.deleteOne({ _id: req.params.id });
    if (deletedEvent.deletedCount === 0) {
      return res.status(404).send("User not found");
    }
    res.send(deletedUser);
    console.log("Event removed successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { deleteEvent };
