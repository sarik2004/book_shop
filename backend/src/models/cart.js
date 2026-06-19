const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const Cart = sequelize.define(
  "Cart",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
  },
  {
    tableName: "carts",
    timestamps: false,
  },
);

module.exports = Cart;
