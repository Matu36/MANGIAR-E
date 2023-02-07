<<<<<<< HEAD
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
=======
const {Recipes} = require('../db.js');

module.exports = (req, res) => {
  // devuelve la receta id: req.params.id o 404 si no existe
  // en el caso que id sea 'daily' devolver 3 recetas random
  //siempre devolver el resultado dentro de un array (aunque tenga una sola receta)

  const getIdRecipe = async (req, res) => {
    try {
      const { idrecipe } = req.params;
      let recipes = await Recipes.findByPk({
        where: 'Recipe_diets',
        required: false,
      });
      recipe ? res.status(SUCCESS).json(recipe) 
      : res.status(NOT_FOUND).json({msg : 'La receta que esta solicitando no se encuentra'});
    } catch(err) {
      res.status(SERVICE_UNAVAILABLE).json(err)
    }
  }
}
>>>>>>> rama-para-solucionar
