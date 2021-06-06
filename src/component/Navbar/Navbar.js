import React from 'react';
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import useStyles from './styles';

export const Navbar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.navbar}>
                <Container>
                    <Toolbar>
                        <Typography variant="h5">
                            EnviClean Patron
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};