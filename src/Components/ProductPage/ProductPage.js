import React from 'react'
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import axios from '../../axios';
import Loader from '../../UI/Loader/Loader';
import ProductCard from './ProductCard';

function ProductPage(props) {
    const [Product, setProduct] = useState()
    const [loading, setloading] = useState(true);


    useEffect(() => {
        // // let productId = ;
        // axios.get(`/${props.match.params.id}`)
        //     .then(response => {
        //         setProduct(response.data)
        //         setloading(false)
        //     })
        setProduct(props.allProducts.find(product => {
            return props.match.params.id == product.id
        }))
        setloading(false)
    }, [])


    return (
        <>
            {
                loading ? <Loader /> :
                    <ProductCard
                        clicked={() => props.history.goBack()}
                        {...Product}
                        key={Product.id}
                    />
            }
            {console.log(Product)}
        </>
    )
}

const mapStateToProps = state => {
    return {
        allProducts: state.products.allProducts,
    }
}


export default connect(mapStateToProps, null)(ProductPage);
