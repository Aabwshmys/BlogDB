const router = require("express").Router();
const controller = require("../controller/Users");

router.route("/users").get(controller.getAllUsers);

module.exports = router;
