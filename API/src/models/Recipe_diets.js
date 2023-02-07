const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('Recipe_diets', {
    recipeId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    diet: {
<<<<<<< HEAD
      type: DataTypes.ENUM(
=======
      type: DataTypes.STRING
      /*
      ENUM(
>>>>>>> rama-para-solucionar
        "gluten free",
        "dairy free",
        "lacto ovo vegetarian",
        "vegan",
        "vegetarian",
        "paleolithic",
        "primal",
        "whole 30",
        "pescatarian",
        "ketogenic",
        "fodmap friendly"
<<<<<<< HEAD
      ),
=======
      )
      */,
>>>>>>> rama-para-solucionar
      primaryKey: true
    }
  }, {
    timestamps: false
  }).removeAttribute('id');
};
