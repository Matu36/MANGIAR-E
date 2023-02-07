const {
    Recipes,
  } = require('../db.js');

module.exports = async (req, res) => {
    try{

      let recips = await Recipes.findAll({
        include: 'Recipe_diets', required: false,
      });
      
      if(!recips.length){
        return res.status(404).send('Recipes Not Found');
      } else {
        let result = [];
        recips.map(recip => {
        const diets = recip.Recipe_diets.map(diet => diet.diet);
          result.push({
            "id": recip.id,
            "title": recip.title,
            "image": recip.image,
            "diet": diets,
          })
        });
        return res.send(result);
      }   

    }
    catch(error) {
      console.log(error);
      return res.status(404).send('Error 404');
    }
  }