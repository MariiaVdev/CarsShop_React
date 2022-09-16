import { GET_CART, GET_COUNTER_CART, ADD_TO_CART, COUNT_CART, DICREMENT_COUNT_CART, DELETE_ITEM_FROM_CART } from "./actions";
import produce from 'immer';

const saveCartToLS = (value) => {
    localStorage.setItem('carts', JSON.stringify(value));
}
const saveCounterToLS = (value) => {
    localStorage.setItem('counter', JSON.stringify(value));
}

const initialState = {
    data: [],
    counter: 0
}
const carsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CART: {
            return produce(state, draftState => {
                draftState.data = action.payload;

                saveCartToLS(draftState.data);
            });
        }
        case GET_COUNTER_CART: {
            return produce(state, draftState => {
                draftState.counter = action.payload;

                saveCounterToLS(draftState.counter);
            });
        }
        case ADD_TO_CART: {
            return produce(state, draftState => {
                const index = draftState.data.findIndex(el => el.code === action.payload.code)

                if (index === -1) {
                    draftState.data.push({ ...action.payload, count: 1 })
                } else {
                    draftState.data[index].count += 1
                }

                saveCartToLS(draftState.data);
            })
        }
        case COUNT_CART: {
            return produce(state, draftState => {
                const acc = draftState.data.reduce((acc, el) => {
                    if (el.count) {
                        acc += el.count;
                    }
                    return acc;
                }, 0);
                draftState.counter = acc;
                saveCounterToLS(draftState.counter);
            })
        }
        case DICREMENT_COUNT_CART: {
            return produce(state, draftState => {
                const acc = draftState.data.reduce((acc, el) => {
                    if (el.code === action.payload) {
                        acc = draftState.counter - el.count;
                    }
                    return acc;
                }, 1);
                draftState.counter = acc;
                saveCounterToLS(draftState.counter);
            })
        }
        case DELETE_ITEM_FROM_CART: {
            return produce(state, draftState => {
                const index = draftState.data.findIndex(el => el.code === action.payload)
               
			if (index !== -1) {
				draftState.data.splice(index, 1);
			}
                saveCartToLS(draftState.data);
            })
        }
        default: {
            return state
        }
    }
}

export default carsReducer;