import produce from 'immer';
import { SET_IS_OPEN_FORM, SET_FORM_DATA } from './actions'

const initialState = {
    isOpenForm: false,
    modalForm: {}
}

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_OPEN_FORM: {
            return produce(state, draftState => {
                draftState.isOpenForm = action.payload;
            });
        }

        case SET_FORM_DATA: {
            return produce(state, draftState => {
                draftState.formData = action.payload;
            });
        }

        default: {
            return state
        }
    }
}

export default formReducer;