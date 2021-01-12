import React from 'react'
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import axios from '../../axios';
import Loader from '../../UI/Loader/Loader';
import ProductCard from './ProductCard';
import { FETCH_PRODUCTS } from '../../Store/Actions/productActions'

function ProductPage(props) {
    const [Product, setProduct] = useState()
    const [loading, setloading] = useState(true);


    useEffect(() => {
        // let productId = ;
        if (props.allProducts.length < 1) {
            axios.get(`/${props.match.params.id}`)
                .then(response => {
                    props.fetchAllProducts([response.data])
                    setProduct(response.data)
                    setloading(false)
                })
        } else {
            setProduct(props.allProducts.find(product => {
                return props.match.params.id == product.id
            }))
            setloading(false)
        }
    }, [])


    return (
        <>
            {
                loading ? <Loader /> :
                    <ProductCard
                        clicked={() => props.history.goBack()}
                        {...Product}
                    // key={Product.id}
                    />
            }
        </>
    )
}

const mapStateToProps = state => {
    return {
        allProducts: state.products.allProducts,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllProducts: (data) => dispatch({
            type: FETCH_PRODUCTS,
            payload: data
        })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
