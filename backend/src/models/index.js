const sequelize = require("../db/connection");
const User = require("./user");
const Category = require("./category");
const Book = require("./book");
const Cart = require("./cart");
const CartItem = require("./cartItem");
const Order = require("./order");
const OrderItem = require("./orderItem");

User.hasMany(Cart, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Cart.belongsTo(User, { foreignKey: "user_id" });

Category.hasMany(Book, {
  foreignKey: "category_id",
  onDelete: "SET NULL",
  onUpdate: "CASCADE",
});
Book.belongsTo(Category, { foreignKey: "category_id" });

Cart.hasMany(CartItem, {
  foreignKey: "cart_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
CartItem.belongsTo(Cart, { foreignKey: "cart_id" });

Book.hasMany(CartItem, {
  foreignKey: "book_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
CartItem.belongsTo(Book, { foreignKey: "book_id" });

User.hasMany(Order, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Order.belongsTo(User, { foreignKey: "user_id" });

Order.hasMany(OrderItem, {
  foreignKey: "order_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
OrderItem.belongsTo(Order, { foreignKey: "order_id" });

Book.hasMany(OrderItem, {
  foreignKey: "book_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
OrderItem.belongsTo(Book, { foreignKey: "book_id" });

module.exports = {
  sequelize,
  User,
  Category,
  Book,
  Cart,
  CartItem,
  Order,
  OrderItem,
};
