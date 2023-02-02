const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('Recipes', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: true
      }
    },
  }, {
    timestamps: false
  });
};

/*
[{
	"id": 782585,
	"title": "Cannellini Bean and Asparagus Salad with Mushrooms",
	"image": "https://spoonacular.com/recipeImages/782585-312x231.jpg",
	"diets": [
		"gluten free",
		"dairy free",
		"lacto ovo vegetarian",
		"vegan"
	],
	"instructions": "Rinse the cannellini beans and soak for 8 hours or overnight in several inches of water.",
	"ingredients": [
    {
      "id": 10716050,
      "amount": "cannellini beans",
      "unitShort": "ml",
      "unitLarge": "mililiters"
    }, {
      "id": 14412,
      "amount": beans",
      "unitShort": "ml",
      "unitLarge": "mililiters"
    }
  ]
}]
*/