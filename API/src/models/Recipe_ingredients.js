const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize
    .define(
      "Recipe_ingredients",
      {
        amount: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        unit: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        },
      },
      {
        timestamps: false,
      }
    )
    .removeAttribute("id");
};
