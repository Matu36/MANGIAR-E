const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('Recipe_ingredients', {
    recipeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: 'recipe-ingredient'
    },
    ingredientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: 'recipe-ingredient'
    },
    quantity: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    timestamps: false
  }).removeAttribute('id');
};
