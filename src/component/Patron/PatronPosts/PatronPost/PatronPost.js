/* Dhrumil Amish Shah */
import React from 'react';
import { Card, CardContent, CardMedia, Chip, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';
import useStyles from './styles.js';
import { IconButton } from '@material-ui/core';

const PatronPost = ({ patronPost, deletePost }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card} elevation={6} key={patronPost.patronPostId}>
            <CardMedia className={classes.media} image={patronPost.image} />
            <div className={classes.overlay}>
                <Typography variant="body2">{moment(patronPost.createdAt).fromNow()}</Typography>
            </div>
            <CardContent>
                <Typography variant="body2" color={"textSecondary"} component="p">{`${patronPost.streetAddress}`}<br />{`${patronPost.city}`}<br />{`${patronPost.province}`}<br />{`${patronPost.zipCode.toUpperCase()}`}</Typography>
                <div className={classes.cardContent}>
                    <Chip label={patronPost.status} className={classes.activeChip} />
                    {((parseInt(JSON.parse(localStorage.getItem("user")).id) === patronPost.userId) &&
                        (patronPost.status === "ACTIVE")) ?
                        <IconButton onClick={() => deletePost(patronPost.patronPostId)}><DeleteIcon style={{ color: '#F44336' }} /></IconButton> :
                        null}
                </div>
            </CardContent>
        </Card>
    );
};

export default PatronPost;