const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('Order_details', {
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: 'order-ingredient'
    },
    ingredientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: 'order-ingredient'
    },
    quantity: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    timestamps: false,
    indexes: [{
      fields: ['orderId']
    }]
  }).removeAttribute('id');
};
