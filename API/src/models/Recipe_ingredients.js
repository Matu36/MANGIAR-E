const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('Recipe_ingredients', {
    recipeId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    ingredientId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    quantity: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    timestamps: false
  }).removeAttribute('id');
};
