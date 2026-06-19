const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const Category = sequelize.define(
  "Category",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: "categories",
    timestamps: false,
  },
);

module.exports = Category;
