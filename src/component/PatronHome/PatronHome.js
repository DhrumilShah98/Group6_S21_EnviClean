import React, { useState } from 'react';
import { Button, Container, Grow, Grid, TextField } from '@material-ui/core';
import PatronForm from '../PatronForm/PatronForm';
import PatronPosts from '../PatronPosts/PatronPosts';
import useStyles from './styles.js';

const PatronHome = () => {
    const [patronPosts, setPatronPosts] = useState([]);
    const classes = useStyles();

    const filterPatronPosts = () => {

    };

    return (
        <Grow in>
            <Container>
                <Grid container direction="row" justify="space-between" alignItems="center">
                    <Grid item xs={12} sm={12} md={2}>
                        <Button
                            style={{ marginTop: '6px', backgroundColor: '#719D57', color: '#FFFFFF', height: '55px' }}
                            variant="contained"
                            size="large">
                            View My Posts
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={12} md={10}>
                        <TextField
                            fullWidth
                            margin="normal"
                            id="search"
                            type="text"
                            name="search"
                            label="Search Name"
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