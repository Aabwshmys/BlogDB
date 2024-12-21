const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    maxlength: 100,
    minlength: 3,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    maxlength: 100,
    minlength: 3,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  bio: String,
  imageProfile: {
    type: Object,
    default: {
      url: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      publicId: null
    }
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  isAccountVerified: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

UserSchema.methods.generateAuthToken = function () {
  return jwt.sign({ id: this._id, isAdmin: this.isAdmin }, "SECRET");
};

const UserModel = mongoose.model("User", UserSchema);

const validateRegisterUser = (obj) => {
  const schema = Joi.object({
    username: Joi.string().trim().max(100).min(3).required(),
    email: Joi.string().trim().min(3).required().email(),
    password: Joi.string().trim().min(6).required()
  });
  return schema.validate(obj);
};

const validateLoginUser = (obj) => {
  const schema = Joi.object({
    email: Joi.string().trim().min(3).required().email(),
    password: Joi.string().trim().min(6).required()
  });
  return schema.validate(obj);
};
const validateUpdateUser = (obj) => {
  const schema = Joi.object({
    username: Joi.string().trim().min(3),
    password: Joi.string().trim().min(6),
    bio:Joi.string().trim().min(6)
  });
  return schema.validate(obj);
};

module.exports = {
  UserModel,
  validateRegisterUser,
  validateLoginUser,
  validateUpdateUser
};
