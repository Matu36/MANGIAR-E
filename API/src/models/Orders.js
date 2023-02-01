const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('Orders', {
    /*
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    */
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tsPayment: {
      type: DataTypes.DATE,
      defaultValue: null
    }
  }, {
    updatedAt: false
  });
};
