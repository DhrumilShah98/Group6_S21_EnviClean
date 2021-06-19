import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from '@material-ui/core';
import React, { forwardRef } from 'react';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="right" ref={ref} {...props} />;
});

const PatronTermsAndConditions = ({ open, closeDialog, agreeTerms }) => {
    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            scroll="paper"
            onClose={closeDialog}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description">
            <DialogTitle style={{ backgroundColor: '#154001', color: '#FFFFFF' }} id="alert-dialog-slide-title">{"EnviClean Patron Terms and Conditions"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et ipsum eget tellus facilisis ornare. Vestibulum ipsum est, vulputate vel neque pulvinar, luctus tempus neque. Praesent cursus et nisl in consequat. Nam turpis risus, porttitor vel tellus at, fringilla dictum justo. Aliquam vel purus euismod, semper tellus id, ultricies turpis. Quisque feugiat imperdiet massa, ut hendrerit nunc sagittis non. Aliquam sit amet semper sapien. Maecenas fermentum lacus justo, vitae feugiat libero sodales quis. Pellentesque dignissim hendrerit nisl sit amet malesuada. In ipsum magna, porta vel diam fringilla, pulvinar mattis ex. Proin et sodales nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In laoreet rutrum odio, id varius magna sodales eu. Curabitur vestibulum ex non gravida varius. Sed tristique luctus nunc et blandit. Fusce maximus mattis fermentum.
                </DialogContentText>
                <DialogContentText id="alert-dialog-slide-description">
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce tristique, nisl ac suscipit consequat, lacus sem dictum urna, at pellentesque neque nisi nec arcu. Suspendisse odio massa, suscipit posuere tortor vitae, placerat interdum augue. Nam id velit id orci vehicula mollis. Proin ligula lectus, aliquam vel lacus vehicula, vestibulum imperdiet eros. Cras pulvinar ante ante, sit amet scelerisque ante molestie vitae. Mauris lobortis vel arcu ut convallis.
                </DialogContentText>
                <DialogContentText id="alert-dialog-slide-description">
                    Aenean mattis sapien ut molestie viverra. Morbi dapibus quam augue, ac auctor ligula molestie porta. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas vulputate euismod tortor, in gravida sem varius non. Morbi in sodales neque, eu hendrerit lacus. Curabitur at lectus dignissim neque porttitor ornare. Suspendisse potenti. Nullam accumsan ullamcorper efficitur. Praesent semper eu nisl sed tempor.
                </DialogContentText>
                <DialogContentText id="alert-dialog-slide-description">
                    Suspendisse potenti. Phasellus tortor nisi, porta nec pretium nec, feugiat non felis. Donec nec fringilla urna. In euismod elit nunc. Fusce lacinia, enim sed elementum tempus, felis tellus tincidunt metus, vel auctor felis felis at dolor. Integer egestas et lectus ac accumsan. Integer cursus augue et velit laoreet, in eleifend sapien efficitur. Donec neque mi, cursus ac tincidunt et, ultrices porta eros. Nam sollicitudin dolor nec odio elementum fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque fermentum purus velit, eget convallis lectus lacinia a. Maecenas ac tellus eget tortor vulputate mattis sed in ligula. Proin mi diam, volutpat quis lectus non, feugiat ornare metus. Sed facilisis urna libero, id interdum massa porta in.
                </DialogContentText>
                <DialogContentText id="alert-dialog-slide-description">
                    Duis hendrerit lacinia nibh, ut dignissim neque blandit vitae. In laoreet erat imperdiet arcu euismod pharetra. Vestibulum a ultricies dolor, id bibendum libero. Cras at placerat ante, et placerat nunc. Sed sollicitudin tincidunt sagittis. Proin a enim in erat fermentum facilisis in a ligula. Curabitur non massa vitae quam imperdiet imperdiet vitae ac elit. Sed eu porta lorem. Vivamus sagittis augue purus, vel interdum est dignissim placerat.
                </DialogContentText>
            </DialogContent>
            <DialogActions style={{ backgroundColor: '#154001' }} >
                <Button style={{ color: '#FFFFFF' }} onClick={closeDialog}>Reject</Button>
                <Button style={{ color: '#FFFFFF' }} onClick={agreeTerms}>Accept</Button>
            </DialogActions>
        </Dialog>
    );
};

export default PatronTermsAndConditions;