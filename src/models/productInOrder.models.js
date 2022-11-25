const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const { Users, Products } = require("./index");

const ProductInOrder = db.define(
  "product_in_order",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Users,
      },
      field: "user_id",
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Products,
      },
      field: "product_id",
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("complete", "pending"),
      defaultValue: "pending",
    },
  },
  {
    timestamps: false,
  }
);

module.exports = ProductInOrder;
