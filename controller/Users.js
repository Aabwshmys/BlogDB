
const asyncHandler = require("express-async-handler");
const Users = require("../models/User");

module.exports = {
  getAllUsers: asyncHandler(async (req, res) => {
    try {
      const users = await Users.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  })
};
