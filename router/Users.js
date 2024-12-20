const router = require("express").Router();
const controller = require("../controller/Users");
const {verifyTokenAndAdmin} = require("../middlewares/verifyToken");

router.route("/profile").get(verifyTokenAndAdmin,controller.getAllUsers);

module.exports = router;
