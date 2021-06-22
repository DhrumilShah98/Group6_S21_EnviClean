import React, {useState} from "react";

function LoginModalComponent(props) {

    const [validForm, setValidForm] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [email, setEmail] = useState("");
    const [emailErrorMessage, setEmailErrorMessage] = useState("");
    const [validPassword, setValidPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    if (!props.modalState) {
        return null;
    }


    function validateSignupForm(event) {
        event.preventDefault();
        setValidForm(true);
        let name = event.target.name;
        let value = event.target.value;
        let err = "";

        const emailRegex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
        const passwordRegex = /^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,16}$/;

        if (name === "email") {
            if (value.length === 0) {
                err = "Email id cannot be empty";
                setValidEmail(false);
            } else if (value.match(emailRegex) === null) {
                err = "Invalid email id";
                setValidEmail(false);
            } else {
                setValidEmail(true);
            }
            setEmail(value);
            setEmailErrorMessage(err);
        }
        if (name === "password") {
            if (value.length === 0) {
                err = <span> * Password cannot be empty </span>;
                setValidPassword(false);
            } else if (value.match(passwordRegex) === null) {
                err = "Password must be 8 to 16 characters long.It should contain\n" +
                    "            alphanumeric and special characters.";
                setValidPassword(false);
            } else {
                setValidPassword(true);
            }
            setPassword(value);
            setPasswordErrorMessage(err);
        }
    }

    function submitForm(event) {
        let validForm = validEmail && validPassword;
        if (validForm) {
            localStorage.setItem('isLoggedIn', true);
            return props.closeModal;
        }
        event.preventDefault();
        setValidForm(validForm);
    }

    return (
        <div className="modal is-active">
            <div className="modal-background" onClick={props.closeModal}/>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title is-size-5 has-text-centered">
                        Welcome Back
                    </p>
                    <button className="delete" onClick={props.closeModal}/>
                </header>
                <section className="modal-card-body modal-card-content-text">
                    <div className="columns is-centered">
                        <div className="column is-half">
                            <form>
                                <div className="field">
                                    <label htmlFor="emailId" className="label">Email Address</label>
                                    <div className="control">
                                        <input className="input is-primary" id="emailId" size="10" type="email"
                                               name = "email"
                                               placeholder="naruto@manga.com"
                                               onChange={validateSignupForm}
                                               required
                                        />
                                        <p className="help is-danger"> {emailErrorMessage} </p>
                                    </div>
                                </div>
                                <div className="field">
                                    <label htmlFor="password" className="label">Password</label>
                                    <div className="control">
                                        <input className="input is-primary" id="password" type="password"
                                               name="password"
                                               placeholder="Enter your password"
                                               required
                                               onChange={validateSignupForm}
                                        />
                                        <p className="help is-danger"> {passwordErrorMessage} </p>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control has-text-centered">
                                        <button className="button is-primary"
                                                onClick={submitForm}>
                                            Login
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default LoginModalComponent;