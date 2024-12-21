
const asyncHandler = require("express-async-handler");
const {UserModel} = require("../models/User");

module.exports = {
  getAllUsers: asyncHandler(async (req, res) => {
    try {
      const users = await UserModel.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }),
  getUser:asyncHandler(async (req,res) => {
    const user = await UserModel.findById(req.params.id);
    if(!user){
      return res.status(404).json({message:"user not fund"});
    }
    return res.status(200).json(user);
  });
};
