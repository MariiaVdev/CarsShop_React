import { GET_CARS, GET_FAVORITE, MARK_AS_FAVORITE, COUNT_FAVORITE, GET_COUNTER_FAVORITE } from "./actions";
import produce from 'immer';

const saveCarsToLS = (value) => {
    localStorage.setItem('cars', JSON.stringify(value));
}
const saveFavoriteToLS = (value) => {
    localStorage.setItem('favorite', JSON.stringify(value));
}
const counterFavoriteToLS = (value) => {
    localStorage.setItem('counterFav', JSON.stringify(value));
}

const initialState = {
    data: [],
    favorite: [],
    counterFavorite: 0
}
const carsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CARS: {
            return produce(state, draftState => {
                draftState.data = action.payload;

                saveCarsToLS(draftState.data);
            });
        }
        case GET_FAVORITE: {
            return produce(state, draftState => {
                draftState.favorite = action.payload;

                saveFavoriteToLS(draftState.favorite);
            });
        }
        case GET_COUNTER_FAVORITE: {
            return produce(state, draftState => {
                draftState.counterFavorite = action.payload;
                counterFavoriteToLS(draftState.counterFavorite);
            });
        }
        case MARK_AS_FAVORITE: {
            return produce(state, draftState => {
                const index = draftState.data.findIndex(el => el.code === action.payload)
                draftState.data[index].isFavorite = !draftState.data[index].isFavorite;
                saveCarsToLS(draftState.data);

                const indexFav = draftState.favorite.findIndex(el => el.code === action.payload)
                if (indexFav === -1 && draftState.data[index].isFavorite) {
                    draftState.favorite.push({ ...draftState.data[index] });
                } else if (!draftState.data[index].isFavorite) {
                    if (indexFav > -1) {
                        draftState.favorite.splice(indexFav, 1);

                    }
                }
                saveFavoriteToLS(draftState.favorite)
            });
        }
        case COUNT_FAVORITE: {
            return produce(state, draftState => {
                const acc = draftState.favorite.reduce((acc, el) => {
                    if (el.isFavorite) {
                        acc += 1;
                    }
                    return acc;
                }, 0);
                counterFavoriteToLS(acc);
                draftState.counterFavorite = acc;
            });
        }
        default: {
            return state
        }
    }
}

export default carsReducer;