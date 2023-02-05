module.exports = (req, res) => {
  // devuelve la receta id: req.params.id o 404 si no existe
  // en el caso que id sea 'daily' devolver 3 recetas random
  //siempre devolver el resultado dentro de un array (aunque tenga una sola receta)

  res.send([
    {
      id: req.params.id,
      title: "Cannellini Bean and Asparagus Salad with Mushrooms",
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
  ]);
};
