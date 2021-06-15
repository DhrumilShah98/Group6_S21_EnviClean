import React from 'react';
import { Card, CardContent, CardMedia, Chip, Typography } from '@material-ui/core';
import moment from 'moment';
import useStyles from './styles.js';

const PatronPost = ({ patronPost }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card} elevation={6}>
            <CardMedia className={classes.media} image={patronPost.selectedFile}/>
            <div className={classes.overlay}>
                <Typography variant="h6">{patronPost.city}</Typography>
                <Typography variant="body2">{moment(patronPost.createdAt).fromNow()}</Typography>
            </div>
            <CardContent>
                <Typography variant="body2" color={"textSecondary"} component="p">{`${patronPost.streetAddress}, ${patronPost.city} ${patronPost.province} ${patronPost.zipCode}`}</Typography>
                <Chip label="Active" className={classes.activeChip}/>
            </CardContent>
        </Card>
    );
}

export default PatronPost;