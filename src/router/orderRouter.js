const express = require("express");
const orderUsers = express.Router();
const { placeOrder, updateOrder } = require("../controller/orderController");

orderUsers.route("/").post(placeOrder);
orderUsers.route("/update").post(updateOrder);

module.exports = { orderUsers };
