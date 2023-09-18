const express = require("express");
const router = express.Router();
const userController = require("../controller/user.Controller");

router.post("/", userController.CreateUser);

module.exports = router;
