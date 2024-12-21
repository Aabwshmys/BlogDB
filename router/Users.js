const router = require("express").Router();
const controller = require("../controller/Users");
const {verifyTokenAndAdmin} = require("../middlewares/verifyToken");
const validateObjectId = require("../middlewares/validateObjectId");

router.route("/profile").get(verifyTokenAndAdmin,controller.getAllUsers);
router.route("/profile/:id").get(validateObjectId,controller.getUser);

module.exports = router;
