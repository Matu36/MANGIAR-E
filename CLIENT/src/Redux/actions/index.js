import axios from "axios";

export const loadingOn = () => {
  return {
    type: "LOADING_ON",
  };
};

export const getRecipes = () => {
  return async (dispatch) => {
    dispatch(loadingOn());
    let recipes = await axios.get("/recipes");
    recipes = recipes.data
    console.log('recetas desde actions: ', recipes)
    return dispatch({ type: "GET_RECIPES", payload: recipes });
  };
};