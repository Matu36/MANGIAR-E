const initialState = {
  loading: false,
  recipes: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING_ON":
      return {
        ...state,
        loading: true,
      };
    case "GET_RECIPES":
      return {
        ...state,
        loading: false,
        recipes: action.payload
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
