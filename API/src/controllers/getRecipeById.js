module.exports = (req, res) => {
    res.send(`getRecipeById  (${req.params.id}) OK!`);
    // devuelve la receta con el detalle de ingredientes
}
