import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    navbar: {
        backgroundColor: '#719D57',
    },
    titleLink: {
        color: '#FFFFFF',
        [theme.breakpoints.down("xs")]: {
            flexGrow: 1,
        },
        textDecoration: 'none',
    },
    title: {
        [theme.breakpoints.down("xs")]: {
            flexGrow: 1,
        },
        color: '#FFFFFF',
    },
    button: {
        color: '#FFFFFF',
    }
}));