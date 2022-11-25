const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const { Cart, Products } = require("./index");

const ProductInCart = db.define(
  "product_in_cart",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    cartId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Cart,
      },
      field: "cart_id",
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Products,
      },
      field: "product_id"
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
      type: DataTypes.ENUM("available", "notAvailable"),
      defaultValue: "available",
    },
  },
  {
    timestamps: false,
  }
);

module.exports = ProductInCart;
