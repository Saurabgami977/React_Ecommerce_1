import * as actionTypes from '../Actions/actionTypes';
import { updateObject } from '../utility';


const initialState = {
    allProducts: null,
    loading: true,
    error: false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_PRODUCTS:
            return updateObject(state, { allProducts: action.payload })
        case actionTypes.FETCH_PRODUCTS_FAILED:
            return updateObject(state, { error: true })
        default:
            return state
    }
}