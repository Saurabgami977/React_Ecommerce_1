import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import * as productFetchingAction from '../../Store/Actions/index';
import Loader from '../../UI/Loader/Loader';
import ProductCard from './ProductCard';


function ProductPage(props) {
    const [Product, setProduct] = useState();

    useEffect(() => {
        if (!props.allProducts) {
            props.fetchAllProducts();
        } else {
            setProduct(props.allProducts.find(product => {
                return props.match.params.id == product.id
            }))
        }
    }, [])


    return (
        <>
            {
                !props.allProducts ? <Loader /> :
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
        fetchAllProducts: () => dispatch(productFetchingAction.fetchProducts())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
