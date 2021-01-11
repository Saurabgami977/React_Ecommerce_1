import * as cartActions from '../Actions/cartAction';

const initialState = {
    products: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case cartActions.ADD_TO_CART:
            return {
                products: [...state.products, action.payload.productId]
            }
        case cartActions.REMOVE_FROM_CART:
            return {
                products: state.products.filter(product => action.payload.productId !== product)
            }
        default:
            return state
    }
}

export default reducer