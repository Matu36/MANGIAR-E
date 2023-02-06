const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize
    .define("Recipe_diets", {}, { timestamps: false })
    .removeAttribute("id");
};
