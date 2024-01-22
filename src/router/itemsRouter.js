const express = require("express");
const itemsRouter = express.Router();
const {
  getAllItems,
  getItemsById,
  deleteItemById,
  addItem,
} = require("../controller/itemsController");

itemsRouter.route("/").get(getAllItems);
itemsRouter.route("/").post(addItem);
itemsRouter.route("/:id").get(getItemsById);
itemsRouter.route("/:id").delete(deleteItemById);

module.exports = { itemsRouter };
