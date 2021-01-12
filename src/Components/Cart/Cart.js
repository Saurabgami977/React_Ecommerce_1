import React from 'react'
import { connect } from 'react-redux'

import Goback from '../Backoption/Goback';
import classes from './Cart.module.css';

function Cart(props) {
    const products = [props.cart]

    return (
        <div className={classes.outerDiv}>
            <Goback clicked={() => props.history.push('/')} />
            <h1 style={{ marginTop: '30px' }}>My Cart</h1>
            {
                products.length > 1 ? <p>{products}</p> : <h2 style={{ marginTop: '40px' }}> Your Shopping Cart is empty</h2>

            }

        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart.products
    }
}


export default connect(mapStateToProps, null)(Cart)
