/* Dhrumil Amish Shah */
import { makeStyles } from "@material-ui/core";
import dustbinBackground from '../../../assets/dustbin_background.jpg';
export default makeStyles(() => ({
    center: {
        backgroundImage: `url(${dustbinBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        overflow: 'hidden',
    },
    card: {
        padding: '16px',
        width: '400px',
        textAlign: 'center',
    },
    centerAvatar: {
        display: 'flex',
        justifyContent: 'center',
    },
    avatar: {
        backgroundColor: '#FFFFFF',
        height: '80px',
        width: '80px',
        marginTop: '-60px',
        position: 'absolute',
    },
    caption1: {
        fontWeight: 'bold',
        marginTop: '40px',
    },
    caption2: {
        fontSize: '14px',
    },
    button: {
        marginTop: '8px',
        display: 'flex',
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
}));