/* Dhrumil Amish Shah */
import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import PatronPost from './PatronPost/PatronPost';
import useStyles from './styles.js';

const PatronPosts = ({ patronPosts, deletePost }) => {
    const classes = useStyles();

    return (
        !patronPosts.length ?
            <CircularProgress className={classes.circularProgress} /> :
            (<Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {patronPosts.map((patronPost) => {
                    if (patronPost.display) {
                        return <Grid item xs={12} sm={6} md={4}>
                            <React.Fragment key={patronPost.patronPostId}>
                                <PatronPost patronPost={patronPost} deletePost={deletePost} />
                            </React.Fragment>
                        </Grid>
                    } else {
                        return null;
                    }
                })}
            </Grid>)
    );
}

export default PatronPosts;