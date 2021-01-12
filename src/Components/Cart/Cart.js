import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import Goback from '../Backoption/Goback';
import classes from './Cart.module.css';

function Cart(props) {
    const products = [...props.cart];
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState([]);
    let po = [];

    useEffect(() => {
        for (let i = 0; i < products.length; i++) {
            po.push(props.allProducts.find(product => product.id === products[i]))
            setTotalPrice(...totalPrice, po.map(product => Number(product.price)))
        }
        setCartItems([...po])
    }, [])


    let items = cartItems.map((item, index) => {
        return (
            <div className={classes.each} key={index}>
                <div className={classes.left}>
                    <img src={item.image} alt={item.title} />
                </div>
                <div className={classes.right}>
                    <h1>{item.title}</h1>
                    <p>{item.price} $</p>
                    <h4 className={classes.description}>{item.description}</h4>
                </div>
            </div>
        )
    })

    let price = totalPrice.reduce((acc, curr) => { return acc + curr }, 0)

    let cart = products.length > 0 ? items : <h2 style={{ marginTop: '40px' }}> Your Shopping Cart is empty</h2>
    return (
        <div className={classes.outerDiv}>
            <Goback clicked={() => props.history.push('/')} />
            <h1 style={{ marginTop: '30px' }}>My Cart</h1>
            {cart}
            <h1>Cart Total : <span>{price}</span> $</h1>
        </div >
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart.products,
        allProducts: state.products.allProducts
    }
}


export default connect(mapStateToProps, null)(Cart)
