const axios = require("axios");
const { api_key } = process.env;

// Controller functions:
const getRandomApiInfo = async () => {
  const apiUrl = await axios.get(
    `https://api.spoonacular.com/recipes/random?${api_key}`
  );

  const apiInfo = await apiUrl.data.results.map((e) => {
    return {
      id: e.id,
      image: e.image,
      name: e.title,
      dietTypes: e.diets,
      healthScore: e.healthScore,
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

module.exports = getRandomApiInfo;
