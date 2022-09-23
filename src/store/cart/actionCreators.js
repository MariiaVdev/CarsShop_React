import { GET_CART, GET_COUNTER_CART, ADD_TO_CART, COUNT_CART, DICREMENT_COUNT_CART, DELETE_ITEM_FROM_CART, RESET_CART, RESET_COUNTER_CART } from "./actions"

export const getCartAC = () => (dispatch) => {

    const carts = localStorage.getItem('carts');
    if (carts) {
        dispatch({ type: GET_CART, payload: JSON.parse(carts) });
        return;
    }
}
export const getCounterCartAC = () => (dispatch) => {

    const counter = localStorage.getItem('counter');
    if (counter) {
        dispatch({ type: GET_COUNTER_CART, payload: JSON.parse(counter) });
        return;
    }
}
export const addToCartAC = (card) => (dispatch) => {

    dispatch({ type: ADD_TO_CART, payload: card })

}
export const countCartAC = () => (dispatch) => {

    dispatch({ type: COUNT_CART })

}
export const dicrementCountCartAC = ( code ) => (dispatch) => {

    dispatch({ type: DICREMENT_COUNT_CART, payload: code })

}
export const deleteItemFromCartAC = ( code ) => (dispatch) => {

    dispatch({ type: DELETE_ITEM_FROM_CART, payload: code })

}
export const resetCartAC = () => (dispatch) => {

    dispatch({ type: RESET_CART })

}
export const resetCounterCartAC = () => (dispatch) => {

    dispatch({ type: RESET_COUNTER_CART })

}