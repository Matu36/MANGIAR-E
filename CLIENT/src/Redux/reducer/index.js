import {
  GET_RECIPES,
  GET_RECIPE_DETAIL,
  FILTER_BY_DIET,
  SET_SEARCH_VALUES_INGREDIENTS,
} from "../actions/index.js";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      };
    case GET_RECIPE_DETAIL:
      return {
        ...state,
        recipeDetail: action.payload,
      };
    case FILTER_BY_DIET:
      return { ...state, filterByDiet: action.payload };

    case SET_SEARCH_VALUES_INGREDIENTS:
      return {
        ...state,
        searchValuesIngredients: [
          ...initialState.searchValuesIngredients,
          action.payload,
        ],

      };
    default:
      return { ...state };
  }
};

export default rootReducer;
