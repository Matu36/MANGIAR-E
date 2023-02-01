const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('Favorites', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: 'user-recipe'
    },
    recipeId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: 'user-recipe'
    }
  }, {
    timestamps: false
  }).removeAttribute('id');
};
