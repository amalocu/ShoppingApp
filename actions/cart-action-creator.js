import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions-types/cart-actions-types";

export function addItemToCart(article){
    return {type: ADD_TO_CART, payload:article}
}

export function removeItem(article){
    return {type: REMOVE_FROM_CART, payload:article}
}