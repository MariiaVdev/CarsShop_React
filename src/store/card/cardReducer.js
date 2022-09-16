import produce from 'immer';
import { SET_CARD_DATA } from './actions'

const initialState = {
    cardData: {}
}

const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CARD_DATA: {
            return produce(state, draftState => {
                draftState.cardData = action.payload;
            });
        }

        default: {
            return state
        }
    }
}

export default cardReducer;