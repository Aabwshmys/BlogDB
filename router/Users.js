const router = require("express").Router();
const controller = require("../controller/Users");
const {verifyTokenAndAdmin,verifyTokenAndUserId} = require("../middlewares/verifyToken");
const validateObjectId = require("../middlewares/validateObjectId");

router.route("/profile").get(verifyTokenAndAdmin,controller.getAllUsers);
router.route("/profile/:id").get(validateObjectId,controller.getUser);
router.route("/profile/:id").put(validateObjectId,verifyTokenAndUserId,controller.updateUser);
module.exports = router;
