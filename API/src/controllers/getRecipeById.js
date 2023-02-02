module.exports = (req, res) => {
    // devuelve la receta id: req.params.id o 404 si no existe
    // en el caso que id sea 'daily' devolver 3 recetas random
    //siempre devolver el resultado dentro de un array (aunque tenga una sola receta)

    res.send([
        
        {
            id: 782585,
            title: "Cannellini Bean and Asparagus Salad with Mushrooms",
            image: "https://spoonacular.com/recipeImages/782585-312x231.jpg",
            diets: [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ],
            instructions: "Rinse the cannellini beans and soak for 8 hours or overnight in several inches of water.",
            ingredients: [
                {
                    id: 10716050,
                    amount: 100,
                    unitShort: "ml",
                    unitLarge: "mililiters"
                }, {
                    id: 14412,
                    amount: 150,
                    unitShort: "ml",
                    unitLarge: "mililiters"
                }
            ]
        }

    ]);
}
