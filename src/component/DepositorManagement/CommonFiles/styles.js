import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

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