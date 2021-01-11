import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles({
    root: {
        maxWidth: 305,
        minHeight: 400,
    },
    media: {
        height: 240,
        transform: 'scale(0.7)'
    },
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
                    <Typography color='secondary'>
                        {props.price} $
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
