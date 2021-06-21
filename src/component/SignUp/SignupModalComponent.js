import React, { useState } from "react";

function SignupModalComponent(props) {
  const [validForm, setValidForm] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [validFirstName, setValidFirstName] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [firstNameErrorMessage, setFirstNameErrorMessage] = useState("");
  const [validLastName, setValidLastName] = useState(false);
  const [lastName, setLastName] = useState("");
  const [lastNameErrorMessage, setLastNameErrorMessage] = useState("");
  const [validAddress, setValidAddress] = useState(false);
  const [address, setAddress] = useState("");
  const [addressErrorMessage, setAddressErrorMessage] = useState("");
  const [validCountry, setValidCountry] = useState(false);
  const [country, setCountry] = useState("");
  const [countryErrorMessage, setCountryErrorMessage] = useState("");
  const [validProvince, setValidProvince] = useState(false);
  const [province, setProvince] = useState("");
  const [provinceErrorMessage, setProvinceErrorMessage] = useState("");
  const [validCity, setValidCity] = useState(false);
  const [city, setCity] = useState("");
  const [cityErrorMessage, setCityErrorMessage] = useState("");
  const [validPincode, setValidPincode] = useState(false);
  const [pincode, setPincode] = useState("");
  const [pincodeErrorMessage, setPincodeErrorMessage] = useState("");
  const [validGender, setValidGender] = useState(false);
  const [gender, setGender] = useState("");
  const [genderErrorMessage, setGenderErrorMessage] = useState("");
  const [validType, setValidType] = useState(false);
  const [type, setType] = useState("");
  const [typeErrorMessage, setTypeErrorMessage] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [validCnfPassword, setValidCnfPassword] = useState(false);
  const [cnfPassword, setCnfPassword] = useState("");
  const [cnfPasswordErrorMessage, setCnfPasswordErrorMessage] = useState("");
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

    const alphaNumericRegex = /^[a-z0-9]+$/i;
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
    if (name === "firstname") {
      if (value.length === 0 || value === undefined || value === null) {
        err = <span>*Firstname cannot be empty</span>;
        setValidFirstName(false);
      } else if (value.match(alphaNumericRegex) === null) {
        err = <span>*Firstname can have only alphanumeric characters</span>;
        setValidFirstName(false);
      } else {
        setValidFirstName(true);
      }
      setFirstName(value);
      setFirstNameErrorMessage(err);
    }
    if (name === "lastname") {
      if (value.length === 0 || value === undefined || value === null) {
        err = <span>*Lastname cannot be empty</span>;
        setValidLastName(false);
      } else if (value.match(alphaNumericRegex) === null) {
        err = <span>*Lastname can have only alphanumeric characters</span>;
        setValidLastName(false);
      } else {
        setValidLastName(true);
      }
      setLastName(value);
      setLastNameErrorMessage(err);
    }
    if (name === "address") {
      if (
        value === "" ||
        value.length === 0 ||
        value === undefined ||
        value === null
      ) {
        err = <span>*Address cannot be empty</span>;
        setValidAddress(false);
      } else if (value.length < 8 || value.length > 80) {
        err = <span>*Address must be 8 to 80 characters long</span>;
        setValidAddress(false);
      } else {
        setValidAddress(true);
      }
      setAddress(value);
      setAddressErrorMessage(err);
    }
    if (name === "country") {
      if (value === "") {
        err = <span>*Please select country</span>;
        setValidCountry(false);
      } else {
        setValidCountry(true);
      }
      setCountry(value);
      setCountryErrorMessage(err);
    }
    if (name === "province") {
      if (value === "") {
        err = <span>*Please select province/state</span>;
        setValidProvince(false);
      } else {
        setValidProvince(true);
      }
      setProvince(value);
      setProvinceErrorMessage(err);
    }
    if (name === "city") {
      if (value.length === 0 || value === undefined || value === null) {
        err = <span>*City cannot be empty</span>;
        setValidCity(false);
      } else if (value.length < 2 || value.length > 30) {
        err = <span>*City must be 2 to 30 characters long</span>;
        setValidCity(false);
      } else if (value.match(alphaNumericRegex) === null) {
        err = <span>*City can have only alphanumeric characters</span>;
        setValidCity(false);
      } else {
        setValidCity(true);
      }
      setCity(value);
      setCityErrorMessage(err);
    }
    if (name === "pincode") {
      if (value.length === 0 || value === undefined || value === null) {
        err = <span>*Pincode cannot be empty</span>;
        setValidPincode(false);
      } else if (value.length < 6 || value.length > 10) {
        err = <span>*Pincode must be 6 to 10 characters long</span>;
        setValidPincode(false);
      } else if (value.match(alphaNumericRegex) === null) {
        err = <span>*Pincode can have only alphanumeric characters</span>;
        setValidPincode(false);
      } else {
        setValidPincode(true);
      }
      setPincode(value);
      setPincodeErrorMessage(err);
    }
    if (name === "gender") {
      if (value === "") {
        err = <span>*Please select gender</span>;
        setValidGender(false);
      } else {
        setValidGender(true);
      }
      setGender(value);
      setGenderErrorMessage(err);
    }
    if (name === "usertype") {
      if (value === "") {
        err = <span>*Please select user type</span>;
        setValidType(false);
      } else {
        setValidType(true);
      }
      setType(value);
      setTypeErrorMessage(err);
    }
    if (name === "password") {
      if (value.length === 0) {
        err = <span> * Password cannot be empty </span>;
        setValidPassword(false);
      } else if (value.match(passwordRegex) === null) {
        err =
          "Password must be 8 to 16 characters long.It should contain\n" +
          "            alphanumeric and special characters.";
        setValidPassword(false);
      } else {
        setValidPassword(true);
      }
      setPassword(value);
      setPasswordErrorMessage(err);
    }
    if (name === "cnfpassword") {
      if (value !== password) {
        err = <span>*Password and Confirm Password mismatch</span>;
        setValidCnfPassword(false);
      } else {
        setValidCnfPassword(true);
      }
      setCnfPassword(value);
      setCnfPasswordErrorMessage(err);
    }
  }

  function submitForm(event) {
    let validForm =
      validEmail &&
      validFirstName &&
      validLastName &&
      validAddress &&
      validCountry &&
      validProvince &&
      validCity &&
      validPincode &&
      validGender &&
      validPassword &&
      validCnfPassword;
    if (validForm) {
      localStorage.setItem("isLoggedIn", true);
      return props.closeModal;
    }
    event.preventDefault();
    setValidForm(validForm);
  }

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={props.closeModal} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title is-size-5 has-text-centered">
            Sign Up
          </p>
          <button className="delete" onClick={props.closeModal} />
        </header>
        <section className="modal-card-body modal-card-content-text">
          <div className="columns is-centered">
            <div className="column is-half">
              <form>
                <div className="field">
                  <label htmlFor="emailId" className="label">
                    Email Address
                  </label>
                  <div className="control">
                    <input
                      className="input is-primary"
                      id="emailId"
                      size="10"
                      type="email"
                      name="email"
                      placeholder="Email address. eg) naruto@manga.com"
                      onChange={validateSignupForm}
                      required
                    />
                    <p className="help is-danger"> {emailErrorMessage} </p>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="firstname" className="label">
                    First Name
                  </label>
                  <div className="control">
                    <input
                      className="input is-primary"
                      id="firstname"
                      size="10"
                      type="text"
                      name="firstname"
                      placeholder="Enter First Name"
                      onChange={validateSignupForm}
                      required
                    />
                    <p className="help is-danger"> {firstNameErrorMessage} </p>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="lastname" className="label">
                    Last Name
                  </label>
                  <div className="control">
                    <input
                      className="input is-primary"
                      id="lastname"
                      size="10"
                      type="text"
                      name="lastname"
                      placeholder="Enter Last Name"
                      onChange={validateSignupForm}
                      required
                    />
                    <p className="help is-danger"> {lastNameErrorMessage} </p>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="address" className="label">
                    Address
                  </label>
                  <div className="control">
                    <input
                      className="input is-primary"
                      id="address"
                      size="10"
                      type="text"
                      name="address"
                      placeholder="Enter Address"
                      onChange={validateSignupForm}
                      required
                    />
                    <p className="help is-danger"> {addressErrorMessage} </p>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="country" className="label">
                    Country
                  </label>
                  <div className="control">
                    <select
                      className="select input is-primary"
                      name="country"
                      onChange={validateSignupForm}
                    >
                      <option value="" defaultValue>
                        Select Country
                      </option>
                      <option value="CA">Canada</option>
                      <option value="IN">India</option>
                    </select>
                    <p className="help is-danger"> {countryErrorMessage} </p>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="province" className="label">
                    Province / State
                  </label>
                  <div className="control">
                    <select
                      className="select input is-primary"
                      name="province"
                      onChange={validateSignupForm}
                    >
                      <option value="" defaultValue>
                        Select Province/State
                      </option>
                      <option value="OT">British Columbia</option>
                      <option value="NS">Nova Scotia</option>
                      <option value="MH">Maharashtra</option>
                      <option value="GJ">Gujarat</option>
                    </select>
                    <p className="help is-danger"> {provinceErrorMessage} </p>
                  </div>
                </div>
                <div className="city">
                  <label htmlFor="city" className="label">
                    City
                  </label>
                  <div className="control">
                    <input
                      className="input is-primary"
                      id="city"
                      size="10"
                      type="text"
                      name="city"
                      placeholder="Enter City"
                      onChange={validateSignupForm}
                      required
                    />
                    <p className="help is-danger"> {cityErrorMessage} </p>
                  </div>
                </div>
                <div className="pincode">
                  <label htmlFor="pincode" className="label">
                    Pincode
                  </label>
                  <div className="control">
                    <input
                      className="input is-primary"
                      id="pincode"
                      size="10"
                      type="text"
                      name="pincode"
                      placeholder="Enter Pincode"
                      onChange={validateSignupForm}
                      required
                    />
                    <p className="help is-danger"> {pincodeErrorMessage} </p>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="gender" className="label">
                    Gender
                  </label>
                  <div className="control">
                    <select
                      className="select input is-primary"
                      name="gender"
                      onChange={validateSignupForm}
                    >
                      <option value="" defaultValue>
                        Select Gender
                      </option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                      <option>Rather not say</option>
                    </select>
                    <p className="help is-danger"> {genderErrorMessage} </p>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="usertype" className="label">
                    Sign Up As
                  </label>
                  <div className="control">
                    <select
                      className="select input is-primary"
                      name="usertype"
                      onChange={validateSignupForm}
                    >
                      <option value="" defaultValue>
                        Select Type
                      </option>
                      <option>Collector</option>
                      <option>Depositor</option>
                    </select>
                    <p className="help is-danger"> {typeErrorMessage} </p>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="password" className="label">
                    Password
                  </label>
                  <div className="control">
                    <input
                      className="input is-primary"
                      id="password"
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      required
                      onChange={validateSignupForm}
                    />
                    <p className="help is-danger"> {passwordErrorMessage} </p>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="cnfpassword" className="label">
                    Confirm Password
                  </label>
                  <div className="control">
                    <input
                      className="input is-primary"
                      id="cnfpassword"
                      type="password"
                      name="cnfpassword"
                      placeholder="Enter your confirm password"
                      required
                      onChange={validateSignupForm}
                    />
                    <p className="help is-danger">{cnfPasswordErrorMessage}</p>
                  </div>
                </div>
                <div className="field">
                  <div className="control has-text-centered">
                    <button className="button is-primary" onClick={submitForm}>
                      Sign Up
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

export default SignupModalComponent;
