import modalReducer from "./modalReducer";
import { SET_IS_OPEN_MODAL, SET_MODAL_DATA } from "./actions";

const initialState = {
    isOpenModal: false,
    modalData: {}
}

describe('Modal reducer works', () => {

    test('should return the initial state', () => {
        expect(modalReducer(undefined, { type: undefined })).toEqual(initialState)
    })
    test('should change isOpenModal state', () => {
        expect(modalReducer(initialState, { type: SET_IS_OPEN_MODAL, payload: true })).toEqual({
            isOpenModal: true,
            modalData: {}
        })
    })
    test('should change modalData data', () => {
        expect(modalReducer(initialState, { type: SET_MODAL_DATA, payload: {name: 'name', price: 123} })).toEqual({
            isOpenModal: false,
            modalData: {name: 'name', price: 123}
        })
    })
})