module.exports = (req, res) => {
    // Devuelve un array con (id y name) de los ingredientes cuyo name coincida con la search del req.query
    // o 404 si no hay coincidencias

    res.send(
        [
            {
                id: 1,
                name: req.query.search
            },
            {
                id: 2,
                name: req.query.search + ' chips'
            },
            {
                id: 3,
                name: 'salad ' + req.query.search
            }
        ]
    );
}
