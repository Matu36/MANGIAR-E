<<<<<<< HEAD
import {GET_RECIPES, 
  GET_RECIPE_DETAIL, 
  FILTER_BY_DIET, 
  SET_ORDER_BY, 
  SET_SEARCH_VALUE_NAME,
 SET_RECIPEID_AUTOCOMPLETE } from '../actions/index.js'

=======
import {
  GET_RECIPES,
  GET_RECIPE_DETAIL,
  FILTER_BY_DIET,
  SET_ORDER_BY,
  CLEAR_FILTERS,
  SET_SEARCH_VALUE_NAME,
  SET_RECIPEID_AUTOCOMPLETE,
  GET_INGREDIENTS,
  CREATE_RECIPE,
  SET_FILTERED_INGREDIENTS,
  DELETE_FILTERED_INGREDIENT,
} from "../actions/index.js";
>>>>>>> rama-para-solucionar

const initialState = {
  recipes: [], 
  recipeDetail: {},
  recipeIdAutocomplete: null,
  diets: ["All Diets",
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
  "fodmap friendly"], 

  filterByDiet: "",

  orderBy: {
    order: "",
    type: undefined,
  },

<<<<<<< HEAD
  searchValueName: ""
=======
  searchValueName: "",

  ingredients: null,
  filteredIngredients: [],
>>>>>>> rama-para-solucionar
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return { 
        ...state,
        recipes: action.payload
    }
    case GET_RECIPE_DETAIL:
      return {
        ...state,
        recipeDetail: action.payload
    } 
    
    case FILTER_BY_DIET:
      return { ...state, filterByDiet: action.payload };

    case SET_ORDER_BY:
      return { ...state, orderBy: action.payload };
<<<<<<< HEAD
      
      case SET_RECIPEID_AUTOCOMPLETE:
=======

    case SET_FILTERED_INGREDIENTS:
      return {
        ...state,
        filteredIngredients: [...state.filteredIngredients, action.payload],
      };

    case DELETE_FILTERED_INGREDIENT:
      return {
        ...state,
        filteredIngredients: state.filteredIngredients.filter(
          (f) => f !== action.payload
        ),
      };

    case CLEAR_FILTERS:
      return {
        ...state,
        filteredIngredients: [],
        filterByDiet: "",
      };

    case SET_RECIPEID_AUTOCOMPLETE:
>>>>>>> rama-para-solucionar
      return { ...state, recipeIdAutocomplete: action.payload };

    case SET_SEARCH_VALUE_NAME:
      return { ...state, searchValue: action.payload };
<<<<<<< HEAD
    default: return {...state}
=======

    case GET_INGREDIENTS:
      return { ...state, ingredients: action.payload };

    case CREATE_RECIPE:
      return { ...state, recipes: [...state.recipes, action.payload] };

    default:
      return { ...state };
>>>>>>> rama-para-solucionar
  }
};

export default rootReducer;
