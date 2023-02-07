import {
  GET_RECIPES,
  GET_RECIPE_DETAIL,
  FILTER_BY_DIET,
  SET_ORDER_BY,
  SET_SEARCH_VALUE_NAME,
  SET_RECIPEID_AUTOCOMPLETE,
  GET_INGREDIENTS,
  CREATE_RECIPE
} from "../actions/index.js";

const initialState = {
  recipes: [],
  recipeDetail: {},
  recipeIdAutocomplete: null,
  diets: [
    "All Diets",
    "gluten free",
    "dairy free",
    "lacto ovo vegetarian",
    "vegan",
    "vegetarian",
    "paleolithic",
    "primal",
    "whole 30",
    "pescatarian",
    "ketogenic",
    "fodmap friendly",
  ],

  filterByDiet: "",

  orderBy: {
    order: "",
    type: undefined,
  },

  searchValueName: "",
  
  ingredients: null
};

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

    case SET_ORDER_BY:
      return { ...state, orderBy: action.payload };

    case SET_RECIPEID_AUTOCOMPLETE:
      return { ...state, recipeIdAutocomplete: action.payload };

    case SET_SEARCH_VALUE_NAME:
      return { ...state, searchValue: action.payload };

    case GET_INGREDIENTS:
      return { ...state, ingredients: action.payload };
  
    case CREATE_RECIPE:
      return { ...state, recipes: [...state.recipes, action.payload] };
    
    default:
      return { ...state };
  }
};

export default rootReducer;
