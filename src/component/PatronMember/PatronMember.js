import patronMemberImg from '../../images/patron_member.png';
import { Card, CardContent, Paper, Typography, CssBaseline, CardActions, Button, Avatar } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

export const PatronMember = () => {
    const classes = useStyles();

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
                <Button className={classes.button} style={{ backgroundColor: '#719D57' }} size="large" variant="contained" fullWidth>
                    Enroll as Patron
                </Button>
            </Card>
        </div>
    )
}