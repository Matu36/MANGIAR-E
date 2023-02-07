const {
    Recipes,
    Recipe_diets,
  } = require('../db.js');

module.exports = async (req, res) => {
    try{
        const { id } = req.params;
  
        Recipes.findOne({
            where: { id },
            include: 'Recipe_diets', required: false,
        }).then(recipe => {
          if (!recipe) {
            return res.status(404).send({ message: "recipe not found" });
          }
          res.status(200).send(recipe);
        });

    }
    catch(error) {
      console.log(error);
      return res.status(404).send('Error 404');
    }
  }