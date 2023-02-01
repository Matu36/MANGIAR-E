const axios = require("axios");
const { apikey } = process.env;

const getRandomRecipe = async () => {
  const apiUrl = await axios.get(
    `https://api.spoonacular.com/recipes/random?apiKey=${apikey}`
  );
  const apiInfo = await apiUrl.data.results.map((e) => {
    return {
      id: e.id,
      name: e.title,
      dietTypes: e.diets,
      image: e.image,
      steps: e.analyzedInstructions[0]?.steps.map((e) => {
        return {
          number: e.number,
          step: e.step,
        };
      }),
    };
  });

  return apiInfo;
};

export default getRandomRecipe;
