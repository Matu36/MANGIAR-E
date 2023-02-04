const router = require('express').Router();
const getRecipes = require('../controllers/getRecipes');
const getRecipeById = require('../controllers/getRecipeById');
const postRecipe = require('../controllers/postRecipe');
const postFavorite= require('../controllers/postFavorites')
const postReview=require('../controllers/postReview')

router.get('/', getRecipes);
router.get('/:id', getRecipeById);
router.post('/', postRecipe);
router.post('/favorites',postFavorite)
router.post('/review',postReview)

module.exports = router;