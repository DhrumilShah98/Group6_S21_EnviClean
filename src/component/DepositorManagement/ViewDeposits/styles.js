import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '100%',
        position: 'relative',
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        backgroundBlendMode: 'darken',
    },
    overlay: {
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'white',
    },
    activeChip: {
        marginTop: theme.spacing(1),
        backgroundColor: '#759B22',
        color: '#FFFFFF',
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    Typography:{
        color: "#000000",
    },
    
}));