<<<<<<< HEAD
const router = require('express').Router();
const getIngredientsBySearch = require('../controllers/getIngredientsBySearch');

router.get('/', getIngredientsBySearch);

module.exports = router;
=======
const router = require("express").Router();
const getIngredients = require('../controllers/getIngredients');

router.get('/', getIngredients);

module.exports = router;
>>>>>>> rama-para-solucionar
