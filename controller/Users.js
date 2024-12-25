
const asyncHandler = require("express-async-handler");
const {UserModel,validateUpdateUser} = require("../models/User");
const bcrypt = require("bcryptjs");

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
  }),
  updateUser:asyncHandler(async (req,res) => {
    const {error} = validateUpdateUser(req.body);
    if(error){
      return res.status(400).json({message:error.details[0].messagr});
    }
    if(req.body.password){
      req.body.password = bcrypt.hashSync(req.body.password,10);
    }
    
    const user = await UserModel.findByIdAndUpdate(req.params.id,{
      $set:{
         username:req.body.username,
         password:req.body.password,
         bio:req.body.bio
      }
    },{new:true});
  return res.status(200).json(user);
  }),
  uploadProfile:asyncHandler(async (req,res)=>{
    console.log(req.file);
    res.status(200).json({message:"Upload Photo Profile is successfully"});
  })
};
