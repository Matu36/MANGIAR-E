module.exports = (req, res) => {
    // devuelve todas las recetas o 404 si no hay ninguna
    //siempre devolver el resultado dentro de un array (aunque tenga una sola receta)

    res.send([
        
        {
            id: 1,
            title: "Receta 1",
            image: "https://spoonacular.com/recipeImages/782585-312x231.jpg",
            diets: [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ],
            instructions: "Instrucciones Receta 1",
            ingredients: [
                {
                    id: 1,
                    amount: 100,
                    unitShort: "ml",
                    unitLarge: "mililiters"
                }, {
                    id: 2,
                    amount: 150,
                    unitShort: "g",
                    unitLarge: "grams"
                }
            ]
        },
        {
            id: 2,
            title: "Receta 2",
            image: "https://spoonacular.com/recipeImages/782585-312x231.jpg",
            diets: [
                "gluten free",
                "vegan"
            ],
            instructions: "Instrucciones Receta 2",
            ingredients: [
                {
                    id: 1,
                    amount: 200,
                    unitShort: "ml",
                    unitLarge: "mililiters"
                }, {
                    id: 4,
                    amount: 300,
                    unitShort: "g",
                    unitLarge: "grams"
                }
            ]
        },
        {
            id: 3,
            title: "Receta 3",
            image: "https://spoonacular.com/recipeImages/782585-312x231.jpg",
            diets: [
                "gluten free",
            ],
            instructions: "Instrucciones Receta 3",
            ingredients: [
                {
                    id: 6,
                    amount: 100,
                    unitShort: "ml",
                    unitLarge: "mililiters"
                }, {
                    id: 8,
                    amount: 150,
                    unitShort: "g",
                    unitLarge: "grams"
                }
            ]
        }
        
    ]);
}