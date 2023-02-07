const { Recipes, Ingredients, Diets } = require("../db");

module.exports = (req, res) => {
  // devuelve todas las recetas o 404 si no hay ninguna
  //siempre devolver el resultado dentro de un array (aunque tenga una sola receta)

  res.send([
    {
      id: 1,
      title: "Receta 1",
      image: "https://spoonacular.com/recipeImages/782585-312x231.jpg",
      diets: ["gluten free", "dairy free", "lacto ovo vegetarian", "vegan"],
      instructions: "Instrucciones Receta 1",
      ingredients: [
        {
          id: 10716050,
          name: "lechuga",
          amount: 100,
          price: 1500,
          unit: "mililiters",
        },
        {
          id: 10716050,
          name: "tomate",
          amount: 150,
          price: 3000,
          unit: "units",
        },
      ],
    },
    {
      id: 2,
      title: "Receta 2",
      image: "https://spoonacular.com/recipeImages/782585-312x231.jpg",
      diets: ["gluten free", "vegan"],
      instructions: "Instrucciones Receta 2",
      ingredients: [
        {
          id: 10716050,
          name: "lechuga",
          amount: 100,
          price: 1500,
          unit: "mililiters",
        },
        {
          id: 10716050,
          name: "tomate",
          amount: 150,
          price: 3000,
          unit: "units",
        },
      ],
    },
    {
      id: 3,
      title: "Receta 3",
      image: "https://spoonacular.com/recipeImages/782585-312x231.jpg",
      diets: ["gluten free"],
      instructions: "Instrucciones Receta 3",
      ingredients: [
        {
          id: 10716050,
          name: "lechuga",
          amount: 100,
          price: 1500,
          unit: "mililiters",
        },
        {
          id: 10716050,
          name: "tomate",
          amount: 150,
          price: 3000,
          unit: "units",
        },
      ],
    },
    {
      id: 4,
      title: "Receta 4",
      image: "https://spoonacular.com/recipeImages/782585-312x231.jpg",
      instructions:
        "Rinse the cannellini beans and soak for 8 hours or overnight in several inches of water.",
      diets: ["gluten free", "dairy free", "lacto ovo vegetarian", "vegan"],
      ingredients: [
        {
          id: 10716050,
          name: "lechuga",
          amount: 100,
          price: 1500,
          unit: "mililiters",
        },
        {
          id: 10716050,
          name: "tomate",
          amount: 150,
          price: 3000,
          unit: "units",
        },
      ],
    },
    {
      id: 5,
      title: "Receta 5",
      image: "https://spoonacular.com/recipeImages/782585-312x231.jpg",
      instructions:
        "Rinse the cannellini beans and soak for 8 hours or overnight in several inches of water.",
      diets: ["gluten free", "dairy free", "lacto ovo vegetarian", "vegan"],
      ingredients: [
        {
          id: 10716050,
          name: "carne",
          amount: 100,
          price: 1500,
          unit: "mililiters",
        },
      ],
    },
  ]);
};
