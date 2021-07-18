/* Dhrumil Amish Shah */
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
                    In using the patron service of this website you are deemed to have read and agreed to the following terms and conditions:
                </DialogContentText>
                <DialogContentText id="alert-dialog-slide-description">
                    The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and any or all Agreements: "Client", “You” and “Your” refers to you, the person accepting to enrol as a patron on this website. "The Company", “Ourselves”, “We” and "Us", refers to EnviClean. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves, or either the Client or ourselves. All terms refer to the offer and acceptance to undertake the process of our assistance to the Client in the most appropriate manner, whether by formal meetings of a fixed duration, or any other means, for the express purpose of meeting the Client’s needs in respect of provision of EnviClean’s stated services/products, in accordance with and subject to, prevailing Law. Any use of the above terminology or other words in the singular, plural, capitalisation and/or he/she or they, are taken as interchangeable and therefore as referring to same.
                </DialogContentText>
                <DialogContentText id="alert-dialog-slide-description">
                    We are committed to protecting your privacy. Authorized employees within the company on a need to know basis only use any information collected from individual customers. We constantly review our systems and data to ensure the best possible service to our customers. Parliament has created specific offences for unauthorised actions against computer systems and data. We will investigate any such actions with a view to prosecuting and/or taking civil proceedings to recover damages against those responsible
                </DialogContentText>
                <DialogContentText id="alert-dialog-slide-description">
                    We are registered under the Data Protection Act 1998 and as such, any information concerning the Client and their respective Client Records may be passed to third parties. However, Client records are regarded as confidential and therefore will not be divulged to any third party, other than if legally required to do so to the appropriate authorities. Clients have the right to request sight of, and copies of any and all Client Records we keep, on the provision that we are given reasonable notice of such a request. Clients are requested to retain copies of any literature issued in relation to the provision of our services. Where appropriate, we shall issue Client’s with appropriate written information, handouts or copies of records as part of an agreed contract, for the benefit of both parties.
                </DialogContentText>
                <DialogContentText id="alert-dialog-slide-description">
                    We will not sell, share, or rent your personal information to any third party or use your e-mail address for unsolicited mail. Any emails sent by this Company will only be in connection with the provision of agreed services and products.
                </DialogContentText>
                <DialogContentText id="alert-dialog-slide-description">
                    The information provided is on an "as is" basis. To the fullest extent permitted by law, EnviClean:
                    <br/><br/>
                    - reserves the right to terminate or suspend service to any patron permanently if the user would compromise an investigation or the integrity or operation of the Service or would cause harm to any user, other third party, EnviClean or our Affiliates in any abusive, objectionable, or harmful way.
                    <br/><br/>
                    - reserves the right to terminate or suspend service to any patron for a period of 7-14 days if the user is reported by the collector of the website for any false information as provided by the patron.
                    <br/>
                    The above exclusions and limitations apply only to the extent permitted by law. None of your statutory rights as a consumer are affected.
                </DialogContentText>
                <DialogContentText>
                    The existing laws govern these terms and conditions. By accessing this website, you consent to these terms and conditions and to the exclusive jurisdiction of the courts in all disputes arising out of such access. If any of these terms are deemed invalid or unenforceable for any reason (including, but not limited to the exclusions and limitations set out above), then the invalid or unenforceable provision will be severed from these terms and the remaining terms will continue to apply. Failure of the Company to enforce any of the provisions set out in these Terms and Conditions and any Agreement, or failure to exercise any option to terminate, shall not be construed as waiver of such provisions and shall not affect the validity of these Terms and Conditions or of any Agreement or any part thereof, or the right thereafter to enforce each and every provision. These Terms and Conditions shall not be amended, modified, varied or supplemented except in writing and signed by duly authorised representatives of the Company.
                </DialogContentText>
                <DialogContentText>
                    These terms and conditions form part of the Agreement between the Client and ourselves. Your accessing of this website and/or undertaking of a booking or Agreement indicates your understanding, agreement to and acceptance, of the Disclaimer Notice and the full Terms and Conditions contained herein. Your statutory Consumer Rights are unaffected.
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