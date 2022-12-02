const db = require("../utils/database");
const { DataTypes } = require("sequelize");

/**
 * @openapi
 * components:
 *   schemas:
 *     CreateOrdersResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: Succesful order created
 *     
 *     AddProductsInOrder:
 *       type: object
 *       properties:
 *         productId:
 *           type: integer
 *           exmaple: 1
 *         quantity:
 *           type: integer
 *           exmaple: 1
 *     AddProductsResponse:
 *       type: object
 *       properties:
 *         message:
 *           tpye: string
 *           example: Succesful product added in order
 *     CompleteOrder:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: Order placed successfully
 *   
 *     GetOrders:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         userId:
 *           type: integer
 *           example: 1
 *         status: 
 *           type: enum
 *           example: pending
 *         totalPrice:
 *           type: float
 *           example: 344.89
 *         createdAt: 
 *           type: date
 *           example: date
 *         updatedAt:
 *           type: date
 *           example: date        
 *       
 */

const Orders = db.define("orders", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "user_id",
  },
  status: {
    type: DataTypes.ENUM("complete", "pending"),
    defaultValue: "pending",
  },
  totalPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
    field: "total_price",
    defaultValue: 0,
  },
});

module.exports = Orders;
