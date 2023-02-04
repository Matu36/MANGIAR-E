const {
    Ingredients,
  } = require('../db.js');

module.exports = async (req, res) => {
    try{

      let ing = await Ingredients.findAll({
      include: 'Ingredient_units', required: false,
      });
      
      if(!ing.length){
        return res.status(404).send('Ingredients Not Found');
      } else {
        return res.send(ing);
      }   

    }
    catch(error) {
      console.log(error);
      return res.status(404).send('Error 404');
    }
  }