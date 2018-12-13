import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions-types/cart-actions-types";
import { List as list, Map as map, fromJS } from 'immutable';

const initialState = list([]);

const CartItems = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
           // return [ ...state, action.payload ];
           console.log(action.payload)
           return state.filter(cartItem => cartItem._id !== action.payload._id).push(action.payload)
        case REMOVE_FROM_CART:
            //=== valida el tipo de dato y el valor.
            //== valida el valor
            console.log(action.payload._id)
            return state.filter(cartItem => cartItem._id !== action.payload._id);
    }
    return state;
}
export default CartItems