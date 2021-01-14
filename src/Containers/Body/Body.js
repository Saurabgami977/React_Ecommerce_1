import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from '../../axios';
import { connect } from 'react-redux'


import Item from '../../Components/Item/Item';
import Loader from '../../UI/Loader/Loader'
import { Grid } from '@material-ui/core';
import { FETCH_PRODUCTS } from '../../Store/Actions/productActions';
import * as productFetchingAction from '../../Store/Actions/index';


function Body(props) {
    useEffect(() => {
        props.fetchAllProducts()
    }, []);

    return (
        <div style={{
            marginTop: '20px'
        }}>
            {
                !props.allProducts ?
                    <Loader /> :
                    <Grid container >
                        <Grid container justify="center" spacing={2} xs={12}>
                            {props.allProducts.map(item => {
                                return (
                                    <Grid key={item.id} item>
                                        <Item
                                            {...item}
                                            clicked={() => props.history.push(`/product/${item.id}`)} />
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Grid>
            }
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        allProducts: state.products.allProducts,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllProducts: () => dispatch(productFetchingAction.fetchProducts())
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Body);
