import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, MenuItem, Menu, Container, Button, useMediaQuery, useTheme } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './styles';

export const Navbar = () => {
    const theme = useTheme();
    const isMobileDevice = useMediaQuery(theme.breakpoints.down("xs"));

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const classes = useStyles();

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.navbar}>
                <Container>
                    <Toolbar>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Button className={classes.button} >
                                <Typography variant="h5" className={classes.title}>EnviClean</Typography>
                            </Button>
                        </Link>
                        <div>
                            {(isMobileDevice) ?
                                <div>
                                    <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleMenu}>
                                        <MenuIcon />
                                    </IconButton>
                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorEl}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={open}
                                        onClose={handleClose}>
                                        <MenuItem onClick={handleClose}>Jobs</MenuItem>
                                        <MenuItem onClick={handleClose}>Deposits</MenuItem>
                                        <MenuItem onClick={handleClose}>Patron</MenuItem>
                                        <MenuItem onClick={handleClose}>FAQ</MenuItem>
                                        <MenuItem onClick={handleClose}>Settings</MenuItem>
                                    </Menu>
                                </div> :
                                <div>
                                    <Button className={classes.button}>Jobs</Button>
                                    <Button className={classes.button}>Deposits</Button>
                                    <Link to="/patron" style={{ textDecoration: 'none' }}><Button className={classes.button}>Patron</Button></Link>
                                    <Button className={classes.button}>FAQ</Button>
                                    <Button className={classes.button}>Settings</Button>
                                </div>}
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};