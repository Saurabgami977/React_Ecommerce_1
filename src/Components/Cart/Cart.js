import React from 'react'
import { connect } from 'react-redux'

import Goback from '../Backoption/Goback';
import classes from './Cart.module.css';

function Cart(props) {
    const products = [props.cart]

    return (
        <div className={classes.outerDiv}>
            <Goback clicked={() => props.history.push('/')} />
            <h1>My Cart</h1>
            <p>{products}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart.products
    }
}


export default connect(mapStateToProps, null)(Cart)
