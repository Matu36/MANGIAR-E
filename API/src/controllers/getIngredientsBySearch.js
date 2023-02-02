module.exports = (req, res) => {
    res.send(`getIngredientsBySearch ${req.query.search} OK!`);
}
