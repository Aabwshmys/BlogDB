const router = require("express").Router();
const controller = require("../controller/Users");
const {verifyTokenAndAdmin,verifyTokenAndUserId} = require("../middlewares/verifyToken");
const validateObjectId = require("../middlewares/ValidateObjectId");
const photoUpload = require("../middlewares/PhotoUpload");

router.route("/profile").get(verifyTokenAndAdmin,controller.getAllUsers);
router.route("/profile/:id").get(validateObjectId,controller.getUser);
router.route("/profile/:id").put(validateObjectId,verifyTokenAndUserId,controller.updateUser);
router.route("/profile/upload-peofile-photo").post(verifyTokenAndAdmin,photoUpload.single("image"),controller.uploadProfile);

module.exports = router;
