const express = require("express");
const addRouter = express.Router();
const { addUser, removeUserById, updateUserById } = require("../controller/userController")

addRouter.route("/").post(addUser);
addRouter.route("/:id").delete(removeUserById);
addRouter.route("/:id").put(updateUserById)

module.exports = { addRouter };
