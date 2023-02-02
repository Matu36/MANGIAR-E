const router = require('express').Router();
const getRecipes = require('../controllers/getRecipes');
const getRecipeById = require('../controllers/getRecipeById');
const postRecipe = require('../controllers/postRecipe');

router.get('/', getRecipes);
router.get('/:id', getRecipeById);
router.post('/', postRecipe);

module.exports = router;