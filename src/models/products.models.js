const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Products = db.define("products", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  availableQty: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "available_qty",
  },
  status: {
    type: DataTypes.ENUM("available", "notAvailable"),
    defaultValue: "available",
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "user_id",
  },
});

module.exports = Products;
