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
    fileInput: {
        width: '97%',
        margin: '10px 0',
    },
    buttonSubmit: {
        backgroundColor: '#719D57',
        color: '#FFFFFF',
        margin: 10,
        marginBottom: 10,
         '& .Mui-disabled': { backgroundColor: '#E0E0E0' },
        // '&:hover': {
        //     backgroundColor: '#719D57',
        //     color: '#FFFFFF',
        // },    
    },
    
    text:{
        error: {
            "&.MuiFormHelperText-root.Mui-error" :{
              color: theme.palette.common.white,
            },
    },
    formControl:{
        align:"left",
        margin:10,
    },
    radio:{
        align:"left",
        padding:0
    }

}}));