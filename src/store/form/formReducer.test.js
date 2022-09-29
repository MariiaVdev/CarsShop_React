import formReducer from "./formReducer";
import { SET_IS_OPEN_FORM, SET_FORM_DATA } from "./actions";

const initialState = {
    isOpenForm: false,
    modalForm: {}
}

describe('Form reducer works', () => {

    test('should return the initial state', () => {
        expect(formReducer(undefined, { type: undefined })).toEqual(initialState)
    })
    test('should change isOpen state', () => {
        expect(formReducer(initialState, { type: SET_IS_OPEN_FORM, payload: true })).toEqual({
            isOpenForm: true,
            modalForm: {}
        })
    })
    test('should change modalForm data', () => {
        expect(formReducer(initialState, { type: SET_FORM_DATA, payload: {name: 'name', price: 123} })).toEqual({
            isOpenForm: false,
            modalForm: {name: 'name', price: 123}
        })
    })
})