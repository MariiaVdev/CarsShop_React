import cartReducer from "./cartReducer";
import { GET_CART, GET_COUNTER_CART, COUNT_CART, RESET_CART, RESET_COUNTER_CART } from "./actions";

const initialState = {
    data: [],
    counter: 0
}

describe('Cart reducer works', () => {

    test('should return the initial state', () => {
        expect(cartReducer(undefined, { type: undefined })).toEqual(initialState)
    })

    test('should change cart data', () => {
        expect(cartReducer(initialState, { type: GET_CART, payload: ['test', 'test'] })).toEqual({
            data: ['test', 'test'],
            counter: 0
        })
    })
    test('should change cart counter', () => {
        expect(cartReducer(initialState, { type: GET_COUNTER_CART, payload: 20 })).toEqual({
            data: [],
            counter: 20
        })
    })
    test('should not change cart counter', () => {
        expect(cartReducer(initialState, { type: COUNT_CART })).toEqual({
            data: [],
            counter: 0
        })
    })
    test('should wiil stay empty cart', () => {
        expect(cartReducer(initialState, { type: RESET_CART })).toEqual({
            data: [],
            counter: 0
        })
    })
    test('should wiil stay empty cart counter', () => {
        expect(cartReducer(initialState, { type: RESET_COUNTER_CART })).toEqual({
            data: [],
            counter: 0
        })
    })




})