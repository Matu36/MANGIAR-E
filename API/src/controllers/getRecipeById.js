const { Recipes } = require("../db");

module.exports = async (req, res) => {
  // devuelve la receta id: req.params.id o 404 si no existe
  // en el caso que id sea 'daily' devolver 3 recetas random
  //siempre devolver el resultado dentro de un array (aunque tenga una sola receta)

  let found = await Recipes.findByPk(req.params.id);

  if (!found) {
    return res.send(404, {
      message: `The recipe with id ${req.params.id} does not exist`,
    });
  }

  let ingredients = await found.getIngredients();
  let diets = await found.getDiets();

  let dietsInRecipe = [];
  for (let diet of diets) {
    dietsInRecipe.push(diet.name);
  }

  let ingredientsInRecipe = [];
  for (let ingredient of ingredients) {
    ingredientsInRecipe.push({
      id: ingredient.id,
      name: ingredient.name,
      price: ingredient.price,
      amount: ingredient.Recipe_ingredients.amount,
      unit: ingredient.Recipe_ingredients.unit,
    });
  }

  res.send([
    {
      id: found.id,
      title: found.title,
      image: found.image,
      instructions: found.instructions,
      diets: dietsInRecipe,
      ingredients: ingredientsInRecipe,
    },
  ]);
};
