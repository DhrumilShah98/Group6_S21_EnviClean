import React from "react";

class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      firstname: "",
      lastname: "",
      address: "",
      country: "",
      province: "",
      city: "",
      pincode: "",
      gender: "",
      password: "",
      cnfpassword: "",
      validEmail: false,
      validFname: false,
      validLname: false,
      validAddress: false,
      validCountry: false,
      validProvince: false,
      validCity: false,
      validPincode: false,
      validGender: false,
      validPassword: false,
      validCnfPassword: false,
      validForm: true,
      emailErrorMessage: "",
      fnameErrorMessage: "",
      lnameErrorMessage: "",
      addressErrorMessage: "",
      countryErrorMessage: "",
      provinceErrorMessage: "",
      cityErrorMessage: "",
      pincodeErrorMessage: "",
      genderErrorMessage: "",
      passwordErrorMessage: "",
      cnfPasswordErrorMessage: "",
      errorMessage: "",
    };
  }

  validateSignupForm = (event) => {
    this.setState({ validForm: true });
    let name = event.target.name;
    let value = event.target.value;
    let err = "";

    const alphaNumericRegex = /^[a-z0-9]+$/i;
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    const passwordRegex = /^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,16}$/;

    if (name === "email") {
      if (value.length === 0 || value === undefined || value === null) {
        err = <span>*Email id cannot be empty</span>;
        this.setState({ validEmail: false });
      } else if (value.match(emailRegex) === null) {
        err = <span>*Invalid email id</span>;
        this.setState({ validEmail: false });
      } else {
        this.setState({ validEmail: true });
      }
      this.setState({ [name]: value });
      this.setState({ emailErrorMessage: err });
      return;
    }
    if (name === "firstname") {
      if (value.length === 0 || value === undefined || value === null) {
        err = <span>*Firstname cannot be empty</span>;
        this.setState({ validFname: false });
      } else if (value.match(alphaNumericRegex) === null) {
        err = <span>*Firstname can have only alphanumeric characters</span>;
        this.setState({ validFname: false });
      } else {
        this.setState({ validFname: true });
      }
      this.setState({ [name]: value });
      this.setState({ fnameErrorMessage: err });
      return;
    }
    if (name === "lastname") {
      if (value.length === 0 || value === undefined || value === null) {
        err = <span>*Lastname cannot be empty</span>;
        this.setState({ validLname: false });
      } else if (value.match(alphaNumericRegex) === null) {
        err = <span>*Lastname can have only alphanumeric characters</span>;
        this.setState({ validLname: false });
      } else {
        this.setState({ validLname: true });
      }
      this.setState({ [name]: value });
      this.setState({ lnameErrorMessage: err });
      return;
    }
    if (name === "address") {
      if (
        value === "" ||
        value.length === 0 ||
        value === undefined ||
        value === null
      ) {
        err = <span>*Address cannot be empty</span>;
        this.setState({ validAddress: false });
      } else if (value.length < 8 || value.length > 80) {
        err = <span>*Address must be 8 to 80 characters long</span>;
        this.setState({ validAddress: false });
      } else {
        this.setState({ validAddress: true });
      }
      this.setState({ [name]: value });
      this.setState({ addressErrorMessage: err });
      return;
    }
    if (name === "country") {
      if (value === "") {
        err = <span>*Please select country</span>;
        this.setState({ validCountry: false });
      } else {
        this.setState({ validCountry: true });
      }
      this.setState({ [name]: value });
      this.setState({ countryErrorMessage: err });
      return;
    }
    if (name === "province") {
      if (value === "") {
        err = <span>*Please select province/state</span>;
        this.setState({ validProvince: false });
      } else {
        this.setState({ validProvince: true });
      }
      this.setState({ [name]: value });
      this.setState({ provinceErrorMessage: err });
      return;
    }
    if (name === "city") {
      if (value.length === 0 || value === undefined || value === null) {
        err = <span>*City cannot be empty</span>;
        this.setState({ validCity: false });
      } else if (value.length < 2 || value.length > 30) {
        err = <span>*City must be 2 to 30 characters long</span>;
        this.setState({ validCity: false });
      } else if (value.match(alphaNumericRegex) === null) {
        err = <span>*City can have only alphanumeric characters</span>;
        this.setState({ validCity: false });
      } else {
        this.setState({ validCity: true });
      }
      this.setState({ [name]: value });
      this.setState({ cityErrorMessage: err });
      return;
    }
    if (name === "pincode") {
      if (value.length === 0 || value === undefined || value === null) {
        err = <span>*Pincode cannot be empty</span>;
        this.setState({ validPincode: false });
      } else if (value.length < 6 || value.length > 10) {
        err = <span>*Pincode must be 6 to 10 characters long</span>;
        this.setState({ validPincode: false });
      } else if (value.match(alphaNumericRegex) === null) {
        err = <span>*Pincode can have only alphanumeric characters</span>;
        this.setState({ validPincode: false });
      } else {
        this.setState({ validPincode: true });
      }
      this.setState({ [name]: value });
      this.setState({ pincodeErrorMessage: err });
      return;
    }
    if (name === "gender") {
      if (value === "") {
        err = <span>*Please select gender</span>;
        this.setState({ validGender: false });
      } else {
        this.setState({ validGender: true });
      }
      this.setState({ [name]: value });
      this.setState({ genderErrorMessage: err });
      return;
    }
    if (name === "password") {
      if (value.length === 0 || value === undefined || value === null) {
        err = <span>*Password cannot be empty</span>;
        this.setState({ validPassword: false });
      } else if (value.match(passwordRegex) === null) {
        err = (
          <span>
            Password must be 8 to 16 characters long. It should contain
            alphanumeric and special characters.
          </span>
        );
        this.setState({ validPassword: false });
      } else {
        this.setState({ validPassword: true });
      }
      this.setState({ [name]: value });
      this.setState({ passwordErrorMessage: err });
      return;
    }
    if (name === "cnfpassword") {
      if (value !== this.state.password) {
        err = <span>*Password and Confirm Password mismatch</span>;
        this.setState({ validCnfPassword: false });
      } else {
        this.setState({ validCnfPassword: true });
      }
      this.setState({ [name]: value });
      this.setState({ cnfPasswordErrorMessage: err });
      return;
    }
  };

  submitForm = () => {
    let validForm =
      this.state.validFname &&
      this.state.validLname &&
      this.state.validEmail &&
      this.state.validPassword &&
      this.state.validAddress &&
      this.state.validCountry &&
      this.state.validProvince &&
      this.state.validCity &&
      this.state.validPincode &&
      this.state.validGender &&
      this.state.validCnfPassword;
    this.setState({ validForm: validForm });
    if (validForm) {
      this.props.history.push("patron");
    }
  };

  render() {
    return (
      <div className="enviclean-container bg-image">
        <div className="signup-container">
          <div className="signup-form">
            <p>Signup</p>
            <input
              className="select is-small is-primary"
              name="email"
              type="text"
              placeholder="Enter Email Id"
              onChange={this.validateSignupForm}
            />
            <p className="error-msg">{this.state.emailErrorMessage}</p>
            <input
              className="select is-small is-primary"
              name="firstname"
              type="text"
              placeholder="Enter First Name"
              onChange={this.validateSignupForm}
            />
            <p className="error-msg">{this.state.fnameErrorMessage}</p>
            <input
              className="select is-small is-primary"
              name="lastname"
              type="text"
              placeholder="Enter Last Name"
              onChange={this.validateSignupForm}
            />
            <p className="error-msg">{this.state.lnameErrorMessage}</p>
            <input
              className="select is-small is-primary"
              name="address"
              type="text"
              placeholder="Enter Address"
              onChange={this.validateSignupForm}
            />
            <p className="error-msg">{this.state.addressErrorMessage}</p>
            <select
              className="select is-small is-primary"
              name="country"
              onChange={this.validateSignupForm}
            >
              <option value="" defaultValue>
                Select Country
              </option>
              <option value="CA">Canada</option>
              <option value="IN">India</option>
            </select>
            <p className="error-msg">{this.state.countryErrorMessage}</p>
            <select
              className="select is-small is-primary"
              name="province"
              onChange={this.validateSignupForm}
            >
              <option value="" defaultValue>
                Select Province/State
              </option>
              <option value="OT">British Columbia</option>
              <option value="NS">Nova Scotia</option>
              <option value="MH">Maharashtra</option>
              <option value="GJ">Gujarat</option>
            </select>
            <p className="error-msg">{this.state.provinceErrorMessage}</p>
            <input
              className="select is-small is-primary"
              name="city"
              type="text"
              placeholder="Enter City"
              onChange={this.validateSignupForm}
            />
            <p className="error-msg">{this.state.cityErrorMessage}</p>
            <input
              className="select is-small is-primary"
              name="pincode"
              type="text"
              placeholder="Enter Pincode"
              onChange={this.validateSignupForm}
            />
            <p className="error-msg">{this.state.pincodeErrorMessage}</p>
            <select
              className="select is-small is-primary"
              name="gender"
              onChange={this.validateSignupForm}
            >
              <option value="" defaultValue>
                Select Gender
              </option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
              <option>Rather not say</option>
            </select>
            <p className="error-msg">{this.state.genderErrorMessage}</p>
            <input
              className="select is-small is-primary"
              name="password"
              type="password"
              placeholder="Enter Password"
              onChange={this.validateSignupForm}
            />
            <p className="error-msg">{this.state.passwordErrorMessage}</p>
            <input
              className="select is-small is-primary"
              name="cnfpassword"
              type="password"
              placeholder="Enter Confirm Password"
              onChange={this.validateSignupForm}
            />
            <p className="error-msg">{this.state.cnfPasswordErrorMessage}</p>
            <p>
              <button
                className="button is-primary is-small signup-button"
                onClick={this.submitForm}
              >
                Signup
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupPage;
