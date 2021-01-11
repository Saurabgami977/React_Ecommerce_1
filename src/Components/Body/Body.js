import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from '../../axios';
import { connect } from 'react-redux'


import Item from '../Item/Item';
import Loader from '../../UI/Loader/Loader'
import { Grid } from '@material-ui/core';
import { FETCH_PRODUCTS } from '../../Store/Actions/productActions'

function Body(props) {

    // const [currentItems, setCurrentItems] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get()
            .then(res => {
                // setCurrentItems(res.data);
                setLoading(false);
                props.fetchAllProducts(res.data)
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div style={{
            marginTop: '20px'
        }}>
            {
                loading ?
                    <Loader /> :
                    <Grid container >
                        <Grid item container justify="center" spacing={2} xs={12}>
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
        fetchAllProducts: (data) => dispatch({
            type: FETCH_PRODUCTS,
            payload: data
        })
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Body);
