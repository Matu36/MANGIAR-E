const { Router } = require("express");
const { Recipes, Recipe_diets, Recipe_ingredients } = require("../db");

//Por el momento devuelve como deberia ser la receta a recibir por req.body
const postRecipe = async (req, res) => {
  const { title, image, diets, instructions, ingredients } = req.body;
  try {
    let id = Math.floor(Math.random() * 1000) + 10;
    let createdRecipe = await Recipes.create({
      id,
      title,
      instructions,
      image,
    });
    let createdIngredients = await Recipe_ingredients.bulkCreate(
      ingredients.map((el) => ({
        recipeId: id,
        ingredientId: el.id,
        amount: el.amount,
        unit: el.unit,
      }))
    );
    let recipeDiet = await Recipe_diets.bulkCreate(
      diets.map((el) => ({
        recipeId: id,
        diet: el,
      }))
    );
    res.status(200).send(createdRecipe);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//     res.send({
//         title: "Receta creada",
//         image: "https://spoonacular.com/recipeImages/782585-312x231.jpg",
//         diets: [
//             "gluten free",
//         ],
//         instructions: "Instrucciones Receta Creada",
//         ingredients: [
//             {
//                 id: 10716050,
//                 amount: 100,
//                 unit: "mililiters"
//             }, {
//                 id: 5,
//                 amount: 150,
//                 unit: "units"
//             }
//         ]

//     }
// );

module.exports = postRecipe;
