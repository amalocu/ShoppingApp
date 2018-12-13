import {createStore} from 'redux';
import {combineReducers} from 'redux-immutable';
import CartItems from "../reducers/cart-items";


//npm install immutable --save
//npm install redux-immutable --save
//// Un solo reducer
//export default Store = createStore(CartItems); 

//Varios reducers
const rootReducers = combineReducers({
    cart: CartItems
  });
export default Store = createStore(rootReducers);