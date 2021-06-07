import patronMemberImg from '../../images/patron_member.png';
import { Card, CardContent, Paper, Typography, CssBaseline, Button, Avatar, CardActions } from '@material-ui/core';
import React, { useState } from 'react';
import useStyles from './styles';
import { PatronTermsAndConditions } from './PatronTermsAndConditions';

export const PatronMember = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const openDialog = () => { setOpen(true); }

    const closeDialog = () => { setOpen(false); }

    return (
        <div className={classes.center}>
            <CssBaseline />
            <Card className={classes.card} component={Paper} elevation={10}>
                <div className={classes.centerAvatar}>
                    <Avatar className={classes.avatar} src={patronMemberImg} />
                </div>
                <CardContent>
                    <Typography className={classes.caption1} variant="h5" component="h2">
                        Let's Clean Together
                    </Typography>
                    <Typography className={classes.caption2} variant="h6" component="h2">
                        Keeping the environment clean is our motive.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button className={classes.button} style={{ backgroundColor: '#719D57' }} onClick={openDialog} size="large" variant="contained" fullWidth>
                        Enroll as Patron
                    </Button>
                </CardActions>
            </Card>
            <PatronTermsAndConditions open={open} closeDialog={closeDialog} />
        </div>
    )
}