/* Dhrumil Amish Shah */
import React, { useState } from 'react';
import { Card, CardContent, Paper, Typography, CssBaseline, Button, Avatar, CardActions } from '@material-ui/core';
import PatronTermsAndConditions from './PatronTermsAndConditions';
import { makePatronMember } from "../../../apis/patronPostAPIs.js";
import patronMemberImg from '../../../assets/patron_member.png';
import { useHistory } from 'react-router-dom';
import useStyles from './styles';

const PatronMember = () => {
    const classes = useStyles();
    const history = useHistory();
    const [open, setOpen] = useState(false);
    const [agree, setAgree] = useState(false);

    const openDialog = () => { setOpen(true); }

    const closeDialog = () => { setOpen(false); }

    async function makeUserPatronMember() {
        const userId = parseInt(JSON.parse(localStorage.getItem("user")).id);
        await makePatronMember(userId).then((res) => {
            const responseExists = (res.data !== null || res.data !== undefined)
            if (responseExists) {
                const currentUser = JSON.parse(localStorage.getItem("user"));
                currentUser.isPatron = 1;
                localStorage.setItem("user", JSON.stringify(currentUser));
                setAgree(true);
                closeDialog();
            } else {
                closeDialog();
            }
        }).catch((err) => {
            closeDialog();
        });
    };

    const agreeTerms = () => {
        makeUserPatronMember();
    }

    const viewPatronPosts = () => {
        history.push('/patron/posts');
    }

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
                    {(agree) ?
                        <Button className={classes.button} onClick={viewPatronPosts} style={{ backgroundColor: '#154001' }} size="large" variant="contained" fullWidth>
                            Registered successfully<br />Create your first post
                        </Button> :
                        <Button className={classes.button} style={{ backgroundColor: '#154001' }} onClick={openDialog} size="large" variant="contained" fullWidth>
                            Enroll as Patron
                        </Button>}
                </CardActions>
            </Card>
            <PatronTermsAndConditions open={open} closeDialog={closeDialog} agreeTerms={agreeTerms} />
        </div>
    )
}

export default PatronMember;