const router = require('express').Router();
const getIngredientsBySearch = require('../controllers/getIngredientsBySearch');

router.get('/', getIngredientsBySearch);

module.exports = router;