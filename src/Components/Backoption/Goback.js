import React from 'react';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';


import classes from './GoBack.module.css';
import { Button } from '@material-ui/core';

function Goback(props) {
    return (
        <div>
            <Button onClick={props.clicked} className={classes.top}>
                <KeyboardBackspaceIcon />
                <h4>Back to store</h4>
            </Button>
        </div>
    )
}

export default Goback
