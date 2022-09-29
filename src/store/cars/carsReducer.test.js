import carsReducer from "./carsReducer";
import { GET_CARS, GET_FAVORITE, GET_COUNTER_FAVORITE, COUNT_FAVORITE } from "./actions";

const initialState = {
    data: [],
    favorite: [],
    counterFavorite: 0
}

describe('Cars reducer works', () => {

    test('should return the initial state', () => {
        expect(carsReducer(undefined, { type: undefined })).toEqual(initialState)
    })

    test('should change cars data', () => {
        expect(carsReducer(initialState, { type: GET_CARS, payload: ['test','test'] })).toEqual({
            data: ['test', 'test'],
            favorite: [],
            counterFavorite: 0
        })
    })

    test('should change cars favorite', () => {
        expect(carsReducer(initialState, { type: GET_FAVORITE, payload: ['test3', 'test4'] })).toEqual({
            data: [],
            favorite: ['test3', 'test4'],
            counterFavorite: 0
        })
    })

    test('should change counter favorite', () => {
        expect(carsReducer(initialState, { type: GET_COUNTER_FAVORITE, payload: 20 })).toEqual({
            data: [],
            favorite: [],
            counterFavorite: 20
        })
    })

    test('should not change counter favorite', () => {
        expect(carsReducer(initialState, { type: COUNT_FAVORITE })).toEqual({
            data: [],
            favorite: [],
            counterFavorite: 0
        })
    })
})