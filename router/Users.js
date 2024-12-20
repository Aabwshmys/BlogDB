const router = require("express").Router();
const controller = require("../controller/Users");

router.route("/profile").get(controller.getAllUsers);

module.exports = router;
