import {
    UPDATE_ITEMS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART_QUANTITY,
    CLEAR_CART,
    TOGGLE_CART
} from "./actions";

const initialState = {
    items: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: ''
}

const reducers = (state = initialState, action) => {
    switch (action.type) {

      case UPDATE_ITEMS:
      return {
        ...state,
       items: [...action.items],
      };

        // if action type value is the value of `UPDATE_CATEGORIES`, return a new state object with an updated categories array
        case UPDATE_CATEGORIES:
            return {
                ...state,
                categories: [...action.categories]
            };

        case UPDATE_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory
            };

            case ADD_TO_CART:
                return {
                  ...state,
                  cartOpen: true,
                  cart: [...state.cart, action.item]
                };
          
              case REMOVE_FROM_CART:
                let newState = state.cart.filter(item => {
                  return item._id !== action._id;
                });
          
                return {
                  ...state,
                  cartOpen: newState.length > 0,
                  cart: newState
                };
          
              case UPDATE_CART_QUANTITY:
                return {
                  ...state,
                  cartOpen: true,
                  cart: state.cart.map(item => {
                    if (action._id === item._id) {
                      item.purchaseQuantity = action.purchaseQuantity;
                    }
                    return item;
                  })
                };
          
              case CLEAR_CART:
                return {
                  ...state,
                  cartOpen: false,
                  cart: []
                };
          
              case TOGGLE_CART:
                return {
                  ...state,
                  cartOpen: !state.cartOpen
                };

        default:
            return state;
    }
}

export default reducers;