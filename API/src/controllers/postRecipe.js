const { Op } = require("sequelize");
const { Recipes, Ingredients, Diets } = require("../db");

const postRecipe = async (req, res) => {
  const { id, title, image, diets, instructions, ingredients } = req.body;
  var createdRecipe = null;
  await sequelize.transaction(async (t) => {
    createdRecipe = await Recipes.create(
      {
        id,
        title,
        instructions,
        image,
      },
      { transaction: t }
    );

    let foundDiets = await Diets.findAll(
      {
        where: {
          name: {
            [Op.in]: diets,
          },
        },
      },
      { transaction: t }
    );

    if (foundDiets.length != diets.length) {
      throw new Error(`I couldn't find all the provided diets.`);
    }

    createdRecipe.addDiets(foundDiets, { transaction: t });

    for (let ingredientInRecipe of ingredients) {
      let ingredient = await Ingredients.findByPk(ingredientInRecipe.id, {
        transaction: t,
      });
      if (ingredient == null) {
        throw Error(
          `The ingredient with id ${ingredientInRecipe.id} was not found.`
        );
      }
      await createdRecipe.addIngredient(ingredient, {
        through: {
          unit: ingredientInRecipe.unit,
          amount: ingredientInRecipe.amount,
        },
        transaction: t,
      });
    }
  });

  let resourceId = createdRecipe.id;

  res
    .status(200)
    .send(
      `${req.protocol}://${req.get("host")}${req.originalUrl}/${resourceId}`
    );
};

module.exports = postRecipe;
