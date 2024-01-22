const express = require("express");
const userLoginRouter = express.Router();
const { login } = require("../controller/loginController");

userLoginRouter.route("/").post(login);

module.exports = { userLoginRouter };
