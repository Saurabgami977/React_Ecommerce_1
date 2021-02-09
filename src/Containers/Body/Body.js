import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Item from '../../Components/Item/Item';
import Loader from '../../UI/Loader/Loader';
import { Grid } from '@material-ui/core';
import * as productFetchingAction from '../../Store/Actions/index';

function Body(props) {
  const allProducts = useSelector(state => state.products.allProducts)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productFetchingAction.fetchProducts())
  }, [dispatch]);

  return (
    <div
      style={{
        marginTop: '20px',
      }}
    >
      {!allProducts ? (
        <Loader />
      ) : (
          <Grid container>
            <Grid item container justify="center" spacing={2} xs={12}>
              {allProducts.map((item) => {
                return (
                  <Grid key={item.id} item>
                    <Item
                      {...item}
                      clicked={() => props.history.push(`/product/${item.id}`)}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        )}
    </div>
  );
}

export default Body;
