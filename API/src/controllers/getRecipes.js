const {
    Recipes,
  } = require('../db.js');

module.exports = async (req, res) => {
    try{

      let Recip = await Recipes.findAll({
        include: 'Recipe_diets', required: false,
      });
      
      if(!Recip.length){
        return res.status(404).send('Recipes Not Found');
      } else {
        return res.send(Recip);
      }   

    }
    catch(error) {
      console.log(error);
      return res.status(404).send('Error 404');
    }
  }