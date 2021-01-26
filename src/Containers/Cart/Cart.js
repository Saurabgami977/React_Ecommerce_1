import { Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';

import Goback from '../../Components/Backoption/Goback';
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
                    <Typography variant="h6">{item.title} - {item.price} $</Typography>
                    <Typography paragraph className={classes.description}>{item.description}</Typography>
                </div>
            </div>
        )
    })

    let price = totalPrice.reduce((acc, curr) => { return acc + curr }, 0)

    let cart = products.length > 0 ? items : <Typography variant="subtitle1" style={{ marginTop: '40px' }}> Your Shopping Cart is empty</Typography>
    return (
        <div className={classes.outerDiv}>
            <Goback clicked={() => props.history.push('/')} />
            <div style={{ marginTop: '30px', display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h4">My Cart</Typography>
                <Typography variant="h4">Cart Total : <span>{price}</span> $</Typography>
            </div>
            {cart}
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
