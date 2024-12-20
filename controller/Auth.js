const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validateRegisterUser,validateLoginUser, UserModel } = require("../models/User");

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
  }),
  login:asyncHandler(async (req,res) => {
    const {error} = validateLoginUser(req.body);
    if(error){
      return res.status(400).json({message:error.dateils[0].message});
    }
    const cheackUser = await UserModel.findOne({email:req.body.email});
    if(!cheackUser){
      return res.status(400).json({message:"Error in Email or Password"});
    }
    const cheackPassword =  bcrypt.compare(req.body.password,cheackUser.password);
    if(!cheackPassword){
      return res.status(400).json({message:"Error in Email or Password"});
    }
    const token = jwt.sign({id:cheackUser._id},"SECRET");
    return res.status(200).json({message:"Logined is successfully",token});
  })
  
};
