import axios from '../../axios';
import * as actionTypes from './actionTypes';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

export const saveProducts = (data) => {
    return {
        type: actionTypes.FETCH_PRODUCTS,
        payload: data
    }
}

export const fetchProductFailed = () => {
    return {
        type: actionTypes.FETCH_PRODUCTS_FAILED
    }
}

export const fetchProducts = () => {
    return dispatch => {
        axios.get()
            .then(res => {
                dispatch(saveProducts(res.data))
            })
            .catch(err => {
                dispatch(fetchProductFailed())
            });
    }
}
