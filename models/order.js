"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User, {
        foreignKey: "id",
      });
      Order.belongsTo(models.Product, {
        foreignKey: "id",
      });
    }
  }
  Order.init(
    {
      userId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      orderQuantity: DataTypes.INTEGER,
      totalPrice: DataTypes.FLOAT,
      orderStatus: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
