const router = require("express").Router();
const controller = require("../controller/Regiser");

router.post("/Register",controller.createUser);

module.exports =router;
