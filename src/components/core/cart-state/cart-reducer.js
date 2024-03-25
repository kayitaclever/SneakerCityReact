// reducers.js
const initialState = { cart: [] };

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return { cart: [...state.cart, action.payload] };
    case "REMOVE_FROM_CART":
      return { cart: state.cart.filter((item) => item.id !== action.payload.id) };
    default:
      return state;
  }
}

export default cartReducer;
