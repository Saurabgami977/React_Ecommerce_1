import { Button } from '@material-ui/core'
import React from 'react'

function MuiButton(props) {
    return (
        <div>
            <Button
                onClick={props.clicked}
                variant={props.variant}
                color={props.color}
                size={props.size}>
                {props.children}
                {/* //gheyuae */}
            </Button>
        </div>
    )
}

export default MuiButton
