const mongoose = require("mongoose");
const joi = require("joi");

const UserSchema = mongoose.Schema({
  username:{
    type:String,
    required:true,
    unique:true,
    maxlength:100,
    minlength:3,
    trim:true
  },
  email:{
    type:String,
    required:true,
    unique:true,
    maxlength:100,
    minlength:3,
    trim:true
  },
  password:{
    type:String,
    required:true,
    minlength:6
  },
  bio:String,
  imageProfile{
    type:Object,
    default:{
      url:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      publicId:null
    }
  },
  isAdmin:{
    type:Boolean,
    default:false
  },
  isAccountVerified:{
    type:Boolean,
    default:false
  }
  
},{timestamps:true});

const UserModel= mongoose.model("User",UserSchema);
const validateRegistetUser =(obj) =>{
  const schema = joi.object({
    username:joi.string().trim().maxlength(100).minlength(6).unique().required(),
    email:joi.string().trim().minlength(6).unique().required().email,
    password;joi.string().trim().minlength(6).required()
  })
  return schema.validate(obj);
}
module.exports= {
  UserModel,
  validateRegisterUser
}
