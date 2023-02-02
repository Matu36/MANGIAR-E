module.exports = (req, res) => {
    //Por el momento devuelve como deberia ser la receta a recibir por req.body

    //const {title, image, diets, instructions, ingredients} = req.body
    res.send({
        title: "Receta creada",
        image: "https://spoonacular.com/recipeImages/782585-312x231.jpg",
        diets: [
            "gluten free",
        ],
        instructions: "Instrucciones Receta Creada",
        ingredients: [
            {
                id: 10716050,
                amount: 100,
                unit: "mililiters"
            }, {
                id: 5,
                amount: 150,
                unit: "units"
            }
        ]

    }
);
}