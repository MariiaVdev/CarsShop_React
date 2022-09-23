import {combineReducers} from "redux";
import modalReducer from "./modal/modalReducer";
import carsReducer from './cars/carsReducer';
import cardReducer from './card/cardReducer';
import cartReducer from './cart/cartReducer';
import formReducer from "./form/formReducer";





const appReducer = combineReducers({
    modal: modalReducer,
    cars: carsReducer,
    card: cardReducer,
    cart: cartReducer,
    form: formReducer
})


export default appReducer;