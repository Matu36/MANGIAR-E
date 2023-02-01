const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('Reviews', {
    recipeId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rate: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    comment: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING
    },
  }, {
    updatedAt: false
  });
};
