const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('Shopping_carts', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: 'user-ingredient'
    },
    ingredientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: 'user-ingredient'
    },
    quantity: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    timestamps: false
  }).removeAttribute('id');
};
