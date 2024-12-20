const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const Users = require("../models/User");
module.exports = {
  getAllUsers:asyncHandler(async (req,res) => {
    const users = await Users.find();
    res.status(200).json(users);
  })
}
