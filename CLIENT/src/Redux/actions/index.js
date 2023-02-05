export const GET_RECIPES = 'GET_RECIPES';
export const GET_RECIPE_DETAIL = 'GET_RECIPE_DETAIL';
export const SET_ORDER_BY = "SET_ORDER_BY";
export const FILTER_BY_DIET = 'FILTER_BY_DIET';
export const SET_SEARCH_VALUE_NAME = 'SET_SEARCH_VALUE_NAME';
export const SET_RECIPEID_AUTOCOMPLETE = "SET_RECIPEID_AUTOCOMPLETE";


//TRAE LAS RECETAS
export const getRecipes = () => async dispatch => {
    return await fetch(`http://localhost:3001/recipes`)
      .then(response => response.json())
      .then(json => { 
        dispatch({ type: GET_RECIPES , payload: json });
      });
  };


  //TRAE EL DETALLE DE LAS RECETAS
export const getRecipeDetail = (id) => async  dispatch => {
    return await fetch(`http://localhost:3001/recipes/${id}`)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: GET_RECIPE_DETAIL , payload: json });
        });
};


//CREAR RECETA
export const createRecipe = (newRecipe) => async dispatch => {
  let data =  await fetch(`http://localhost:3001/recipes`,{
          method: 'POST',
          headers : {'Content-Type' : 'application/json'},
          body: JSON.stringify(newRecipe)
        }).then(res => res)
  console.log(data)
  return data;
};


//FILTRO POR DIETA
  export const filterByDiet = (diet) => {
    return (dispatch) => dispatch({ type: "FILTER_BY_DIET", payload: diet });
  };

  //FILTRA POR ORDEN
  export const setOrderBy = (order) => {
    return (dispatch) => dispatch({ type: "SET_ORDER_BY", payload: order });
  };

  //FILTRA POR NOMBRE
  export const setSearchValueName = (searchValueName) => {
    return (dispatch) => dispatch({ type: "SET_SEARCH_VALUE_NAME", payload: searchValueName });
  };

  export const setRecipeIdAutocomplete = (recipeIdAutocomplete) => {
    return (dispatch) => dispatch ({type: "SET_RECIPEID_AUTOCOMPLETE", payload:recipeIdAutocomplete })
  }