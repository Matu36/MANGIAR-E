module.exports = (req, res) => {
    // Devuelve un array con (id y name) de los ingredientes cuyo name coincida con la search del req.query
    // o 404 si no hay coincidencias

    res.send(
        [
            {
                id: 1,
                name: req.query.search,
                price: 1500,
                units: ['cherry', 'grams']
            },
            {
                id: 2,
                name: req.query.search + ' chips',
                price: 500.55,
                units: ['oz', 'small']
            },
            {
                id: 3,
                name: 'salad ' + req.query.search,
                price: 3.5,
                units: ['cups']
            }
        ]
    );
}
