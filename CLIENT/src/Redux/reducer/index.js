import {GET_RECIPES, 
  GET_RECIPE_DETAIL, 
  FILTER_BY_DIET, 
  SET_ORDER_BY, 
  SET_SEARCH_VALUE_NAME,
<<<<<<< HEAD
  SET_RECIPEID_AUTOCOMPLETE,
  GET_INGREDIENTS,
  CREATE_RECIPE
} from "../actions/index.js";
=======
 SET_RECIPEID_AUTOCOMPLETE } from '../actions/index.js'

>>>>>>> d9e89152ad6081261f9e705d473f964cf93bc1af

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
  searchValueName: "",
  
  ingredients: null
=======
  searchValueName: ""
>>>>>>> d9e89152ad6081261f9e705d473f964cf93bc1af
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
      
      case SET_RECIPEID_AUTOCOMPLETE:
      return { ...state, recipeIdAutocomplete: action.payload };

    case SET_SEARCH_VALUE_NAME:
      return { ...state, searchValue: action.payload };
<<<<<<< HEAD

    case GET_INGREDIENTS:
      return { ...state, ingredients: action.payload };
  
    case CREATE_RECIPE:
      return { ...state, recipes: [...state.recipes, action.payload] };
    
    default:
      return { ...state };
=======
    default: return {...state}
>>>>>>> d9e89152ad6081261f9e705d473f964cf93bc1af
  }
};

export default rootReducer;
