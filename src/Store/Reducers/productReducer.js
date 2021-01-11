import { FETCH_PRODUCTS } from '../Actions/productActions'

const initialState = {
    allProducts: [],
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                allProducts: action.payload
            }
        default:
            return state
    }
}