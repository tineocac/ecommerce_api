const {
  Users,
  Products,
  Cart,
  Orders,
  ProductInCart,
  ProductInOrder,
} = require("./index");

const initModels = () => {
  Users.hasMany(Products, { foreignKey: "user_id" });
  Products.belongsTo(Users, { foreignKey: "user_id" });

  Users.hasOne(Cart, { foreignKey: "user_id" });
  Cart.belongsTo(Users, { foreignKey: "user_id" });

  Users.hasMany(Orders, { foreignKey: "user_id" });
  Orders.belongsTo(Users, { foreignKey: "user_id" });

  Products.hasOne(ProductInCart, { foreignKey: "product_id" });
  ProductInCart.belongsTo(Products, { foreignKey: "product_id" });

  Cart.hasMany(ProductInCart, { foreignKey: "cart_id" });
  ProductInCart.belongsTo(Cart, { foreignKey: "cart_id" });

  Products.hasOne(ProductInOrder, { foreignKey: "product_id" });
  ProductInOrder.belongsTo(Products, { foreignKey: "product_id" });

  Orders.hasMany(ProductInOrder, { foreignKey: "order_id" });
  ProductInOrder.belongsTo(Orders, { foreignKey: "order_id" });
};

module.exports = initModels;
