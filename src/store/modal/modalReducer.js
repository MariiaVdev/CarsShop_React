import produce from 'immer';
import { SET_IS_OPEN_MODAL, SET_MODAL_DATA } from './actions'

const initialState = {
    isOpenModal: false,
    modalData: {}
}

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_OPEN_MODAL: {
            return produce(state, draftState => {
                draftState.isOpenModal = action.payload;
            });
        }

        case SET_MODAL_DATA: {
            return produce(state, draftState => {
                draftState.modalData = action.payload;
            });
        }

        default: {
            return state
        }
    }
}

export default modalReducer;