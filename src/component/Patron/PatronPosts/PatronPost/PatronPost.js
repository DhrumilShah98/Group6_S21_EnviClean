import React from 'react';
import { Card, CardContent, CardMedia, Chip, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';
import useStyles from './styles.js';
import { IconButton } from '@material-ui/core';

const PatronPost = ({ patronPost, deletePost }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card} elevation={6}>
            <CardMedia className={classes.media} image={patronPost.selectedFile} />
            <div className={classes.overlay}>
                <Typography variant="body2">{moment(patronPost.createdAt).fromNow()}</Typography>
            </div>
            <CardContent>
                <Typography variant="body2" color={"textSecondary"} component="p">{`${patronPost.streetAddress}, ${patronPost.city}, ${patronPost.province}, ${patronPost.zipCode.toUpperCase()}`}</Typography>
                <div className={classes.cardContent}>
                    <Chip label="Active" className={classes.activeChip} />
                    {(patronPost.myPost) ? <IconButton onClick={() => deletePost(patronPost._id)}><DeleteIcon style={{ color: '#F44336' }} /></IconButton> : null}
                </div>
            </CardContent>
        </Card>
    );
};

export default PatronPost;