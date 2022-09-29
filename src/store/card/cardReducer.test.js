import cardReducer from "./cardReducer";
import { SET_CARD_DATA } from "./actions";

const initialState = {
    cardData: {}
}

describe('Card reducer works', () => {

    test('should return the initial state', () => {
        expect(cardReducer(undefined, { type: undefined })).toEqual(initialState)
    })

    test('should change card data', () => {
        expect(cardReducer(initialState, { type: SET_CARD_DATA, payload: { name: 'name', price: 123, img: 'img', code: 345, color: 'color' } })).toEqual({
            cardData: {
                name: 'name',
                price: 123,
                img: 'img',
                code: 345,
                color: 'color'
            }
        })
    })
})