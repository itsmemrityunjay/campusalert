const { UserModel } = require("../models/userModel");

const editUser = async (req, res) => {
  try {
    const updatedUser = await UserModel.findOneAndUpdate(
      { _id: req.params.id }, // Filter to find the user by ID
      req.body, // Data to update with
      { new: true } // Option to return the updated document
    );
    if (!updatedUser) {
      return res.status(404).send("User not found");
    }
    res.send(updatedUser);
    console.log("User updated successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
module.exports = { editUser };
