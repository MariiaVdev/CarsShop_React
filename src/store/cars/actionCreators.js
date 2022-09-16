import { GET_CARS, GET_FAVORITE, MARK_AS_FAVORITE, COUNT_FAVORITE, GET_COUNTER_FAVORITE } from "./actions"
import axios from 'axios'

export const getCarsAC = () => async (dispatch) => {

    const carsArr = localStorage.getItem('cars');
    if (!carsArr) {
        const cars = await axios.get(`./cars.json`);
        dispatch({ type: GET_CARS, payload: cars.data });
        return;
    }

    dispatch({ type: GET_CARS, payload: JSON.parse(carsArr) });

}
export const getFavoriteAC = () => (dispatch) => {

    const favorite = localStorage.getItem('favorite');
    if (favorite) {
        dispatch({ type: GET_FAVORITE, payload: JSON.parse(favorite) });
        return;
    }
}
export const markAsFavoriteAC = ( code ) => (dispatch) => {

    dispatch({ type: MARK_AS_FAVORITE, payload: code })

}
export const getCounterFavoriteAC = () => (dispatch) => {

    const counterFavorite = localStorage.getItem('counterFav');
    if (counterFavorite) {
        dispatch({ type: GET_COUNTER_FAVORITE, payload: JSON.parse(counterFavorite) });
        return;
    }
}
export const countFavoriteAC = () => (dispatch) => {

    dispatch({ type: COUNT_FAVORITE })

}
