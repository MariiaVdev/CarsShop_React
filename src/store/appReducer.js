import {combineReducers} from "redux";
import modalReducer from "./modal/modalReducer";
import carsReducer from './cars/carsReducer';
import cardReducer from './card/cardReducer';
import cartReducer from './cart/cartReducer';




const appReducer = combineReducers({
    modal: modalReducer,
    cars: carsReducer,
    card: cardReducer,
    cart: cartReducer
})


export default appReducer;