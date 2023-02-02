const initialState = {
  //key: value
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "EXAMPLE":
      return {
        ...state,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
