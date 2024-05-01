const { UserModel } = require("../models/userModel");

const deleteUser = async (req, res) => {
  try {
    const deletedUser = await UserModel.deleteOne({ _id: req.params.id });
    if (deletedUser.deletedCount === 0) {
      return res.status(404).send("User not found");
    }
    res.send(deletedUser);
    console.log("User removed successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { deleteUser };
