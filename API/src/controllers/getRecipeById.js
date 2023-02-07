const {
  Recipes,
} = require('../db.js');

module.exports = async (req, res) => {
  try{

    let recip = await Recipes.findByPk( req.params.id, 
      {include: ['Recipe_diets', 'Recipe_ingredients'], required: false},
    );
    
    if(!recip){
      return res.status(404).send('Recipes Not Found');
    } else {
      
      const diets = recip.Recipe_diets.map(diet => diet.diet);
      const ingredientsId = recip.Recipe_ingredients.map(ingredient => ingredient.ingredientId);

      return res.status(200).send({
        "id": recip.id,
        "title": recip.title,
        "image": recip.image,
        "diets": diets,
        "ingredients": ingredientsId,
      });
    }   

  }
  catch(error) {
    console.log(error);
    return res.status(404).send('Error 404');
  }
}