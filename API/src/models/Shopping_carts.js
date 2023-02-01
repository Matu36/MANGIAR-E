const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('Shopping_carts', {
    userId: {
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
