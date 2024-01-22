const express = require("express");
const addRouter = express.Router();
const { addUser, removeUserById } = require("../controller/addUserController");

addRouter.route("/").post(addUser);
addRouter.route("/:id").delete(removeUserById);

module.exports = { addRouter };
