import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Button from '../../UI/Button/Button';

const useStyles = makeStyles({
    root: {
        minWidth: 400,
        minHeight: 450,
    },
    media: {
        height: 240,
        transform: 'scale(0.7)'
    },
    footer: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        zIndex: 4
    }
});

export default function MediaCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root} onClick={props.clicked}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.image}
                    title={props.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <div className={classes.footer}>
                        <Typography color='secondary'>
                            {props.price} $
                        </Typography>
                        <Typography color='secondary'>
                            <Button onClick={() => console.log('hell')}>Add to Cart</Button>
                        </Typography>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
