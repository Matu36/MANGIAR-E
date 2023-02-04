const {Favorites} = require("../db");
const {Op} = require('sequelize');

const postFavorite = async (req, res) => {
  const {userId,recipeId} = req.body;
  try {
  let favoriteRecipe=await Favorites.create({
    userId,
    recipeId
  })
 

    res.status(200).send(favoriteRecipe);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = postFavorite;
