const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('Order_details', {
    orderId: {
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
