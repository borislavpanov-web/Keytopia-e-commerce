import { createStore } from "redux";

const initialState = {
  visibleProducts: 2,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_VISIBLE_PRODUCTS":
      return {
        ...state,
        visibleProducts: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
