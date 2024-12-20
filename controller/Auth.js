const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const { validateRegisterUser, UserModel } = require("../models/User");

module.exports = {
  createUser: asyncHandler(async (req, res) => {
    const { error } = validateRegisterUser(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const user = await UserModel.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ message: "User Already Exists" });
    }
    const hashPassword = bcrypt.hashSync(req.body.password, 10);
    const create = new UserModel({
      username: req.body.username,
      email: req.body.email,
      password: hashPassword
    });
    await create.save();
    return res.status(200).json({ message: "Create User successfully" });
  })
};
