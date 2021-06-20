import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(4),
        padding: theme.spacing(2),
    },
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        align:"left"
    },
    buttonSubmit: {
        backgroundColor: '#719D57',
        color: '#FFFFFF',
        margin: 10,
        marginBottom: 10,  
    },
    

}));