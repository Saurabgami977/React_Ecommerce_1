import React, { useState } from 'react';
import { connect } from 'react-redux'

import classes from './ProductCard.module.css';
import Goback from '../Backoption/Goback';
import MuiButton from '../../UI/Button/Button';
import * as cartActions from '../../Store/Actions/cartAction';
import SpringModal from '../../UI/Modal/Modal'

function ProductCard(props) {
    const [showModal, setShowModal] = useState(false)
    return (
        <div className={classes.outerDiv}>
            {showModal && <SpringModal />}
            <div>
                <Goback clicked={props.clicked} />
            </div>
            <div className={classes.middle}>
                <img src={props.image} alt={props.title} />
                <div className={classes.detail}>
                    <h2>{props.title}</h2>
                    <p style={{ color: 'red' }}>{props.price} $</p>
                    <MuiButton clicked={() => { props.onAdd(props.id); setShowModal(true) }} variant='contained' color='primary' size='small'><SpringModal action='Item Added!' title={props.title} text={'Add to cart'} /></MuiButton>
                </div>
            </div>
            <div className={classes.description}>
                <h2>Description:</h2>
                {props.description}
            </div>
        </div >
    )
}
const mapDispatchToProps = dispatch => {
    return {
        onAdd: (id) => dispatch({ type: cartActions.ADD_TO_CART, payload: { productId: id } })
    }
}

export default connect(null, mapDispatchToProps)(ProductCard)
