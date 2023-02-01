const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('Recipes', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  }, {
    timestamps: false
  });
};
