const router = require("express").Router();
const controller = require("../controller/Auth");

router.post("/Register",controller.createUser);

module.exports =router;
