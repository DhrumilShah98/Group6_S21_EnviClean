import React from "react";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      validEmail: false,
      validPassword: false,
      validForm: true,
      emailErrorMessage: "",
      passwordErrorMessage: "",
      errorMessage: "",
    };
  }

  validateSignupForm = (event) => {
    this.setState({ validForm: true });
    let name = event.target.name;
    let value = event.target.value;
    let err = "";

    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    const passwordRegex = /^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,16}$/;

    if (name === "email") {
      if (value.length === 0 || value === undefined || value === null) {
        err = <span> * Email id cannot be empty </span>;
        this.setState({ validEmail: false });
      } else if (value.match(emailRegex) === null) {
        err = <span> * Invalid email id </span>;
        this.setState({ validEmail: false });
      } else {
        this.setState({ validEmail: true });
      }
      this.setState({
        [name]: value,
      });
      this.setState({ emailErrorMessage: err });
      return;
    }
    if (name === "password") {
      if (value.length === 0 || value === undefined || value === null) {
        err = <span> * Password cannot be empty </span>;
        this.setState({ validPassword: false });
      } else if (value.match(passwordRegex) === null) {
        err = (
          <span>
            Password must be 8 to 16 characters long.It should contain
            alphanumeric and special characters.
          </span>
        );
        this.setState({ validPassword: false });
      } else {
        this.setState({ validPassword: true });
      }
      this.setState({
        [name]: value,
      });
      this.setState({ passwordErrorMessage: err });
      return;
    }
  };

  submitForm = () => {
    let validForm = this.state.validEmail && this.state.validPassword;
    this.setState({ validForm: validForm });
    if (validForm) {
      this.props.history.push("patron");
    }
  };

  render() {
    return (
      <div className="enviclean-container bg-image">
        <div className="login-container">
          <div className="login-form">
            <p className="form-heading"> Login </p>
            <input
              className="select is-small is-primary"
              name="email"
              type="text"
              placeholder="Enter Email Id"
              onChange={this.validateSignupForm}
            />
            <p className="error-msg"> {this.state.emailErrorMessage} </p>
            <input
              className="select is-small is-primary"
              name="password"
              type="password"
              placeholder="Enter Password"
              onChange={this.validateSignupForm}
            />
            <p className="error-msg"> {this.state.passwordErrorMessage} </p>
            <p>
              <button
                className="button is-primary is-small login-button"
                onClick={this.submitForm}
              >
                Login
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
