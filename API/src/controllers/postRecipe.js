module.exports = (req, res) => {
    //Por el momento devuelve la misma receta que recibe por body

    const {title, image, diets, instructions, ingredients} = req.body
    res.send({
        id: 10000,
        title,
        image,
        diets,
        instructions,
        ingredients
    });
}