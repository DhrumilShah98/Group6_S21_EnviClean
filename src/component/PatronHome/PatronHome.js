import React, { useEffect, useState } from 'react';
import { Button, Container, Grow, Grid, TextField } from '@material-ui/core';
import PatronForm from '../PatronForm/PatronForm';
import PatronPosts from '../PatronPosts/PatronPosts';
import useStyles from './styles.js';
import dummyPatronFormData from './dummyPatronFormData';

const PatronHome = () => {
    const [patronPosts, setPatronPosts] = useState(dummyPatronFormData);
    const [viewMyPosts, setViewMyPosts] = useState(false);
    const classes = useStyles();

    const filterPatronPosts = () => {

    };

    const toggleViewMyPosts = () => {
        setViewMyPosts(!viewMyPosts);
        if (viewMyPosts) {
            patronPosts.forEach(function (post) {
                if (post.myPost) {
                    post.display = true;
                } else {
                    console.log(1);
                    post.display = false;
                }
            });
        } else {
            patronPosts.forEach(function (post) {
                post.display = true;
            });
        }
        setPatronPosts(patronPosts);
    };

    return (
        <Grow in>
            <Container>
                <Grid container direction="row" justify="space-between" alignItems="center">
                    <Grid item xs={12} sm={12} md={2}>
                        {(viewMyPosts) ?
                            <Button
                                style={{ marginTop: '6px', backgroundColor: '#719D57', color: '#FFFFFF', height: 55, width: 180 }}
                                variant="contained"
                                size="large"
                                onClick={toggleViewMyPosts}>
                                View All Posts
                            </Button> :
                            <Button
                                style={{ marginTop: '6px', backgroundColor: '#719D57', color: '#FFFFFF', height: 55, width: 180 }}
                                variant="contained"
                                size="large"
                                onClick={toggleViewMyPosts}>
                                View My Posts
                            </Button>}
                    </Grid>
                    <Grid item xs={12} sm={12} md={10}>
                        <TextField
                            fullWidth
                            margin="normal"
                            id="search"
                            type="text"
                            name="search"
                            label="Search By Address"
                            variant="outlined"
                            autoComplete="off"
                            required
                            onChange={filterPatronPosts} />
                    </Grid>
                </Grid>
                <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch">
                    <Grid item xs={12} md={7}>
                        <PatronPosts patronPosts={patronPosts} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <PatronForm patronPosts={patronPosts} setPatronPosts={setPatronPosts} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
}

export default PatronHome;