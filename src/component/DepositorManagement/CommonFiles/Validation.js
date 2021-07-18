/* Author Sriram Attanti*/
function Validation(values) {
  let errors = {};
  const regextaskname = /^([a-zA-Z0-9]+)$/;
  const regexweight = /^([0-9.]+)$/;
  const regexpincode = /^([a-zA-Z0-9 ]+)$/;
  const regexphonenumber = /^([0-9 ]+)$/;

  if (!values.taskname.trim()) {
    errors.taskname = "Task Name is required";
  } else if (values.taskname.length > 20) {
    errors.taskname = "Task Name cannot have more than 10 characters";
  } else if (!regextaskname.test(values.taskname)) {
    errors.taskname = "Task Name must contain only alpabets and numbers";
  }
  if (!values.weight) {
    errors.weight = "Approximate weight is required";
  } else if (!regexweight.test(values.weight)) {
    errors.weight = "Enter a vaild number in Approximate weight in kilograms";
  }else if (values.weight < 0)
  {
    errors.weight = "Weight should be in positive number";
  }
  if (!values.pincode.trim()) {
    errors.pincode = "Pincode is required";
  } else if (values.pincode.split(" ").join("").length !== 6) {
    errors.pincode = "Pincode length must be 6 characters";
  } else if (!regexpincode.test(values.pincode)) {
    errors.pincode = "Enter a valid pincode";
  }
  if (!values.phonenumber.trim()) {
    errors.phonenumber = "Enter Contact Number";
  } else if (values.phonenumber.split(" ").join("").length !== 10) {
    errors.phonenumber = "Contact number must contain 10 digits";
  } else if (!regexphonenumber.test(values.phonenumber)) {
    errors.phonenumber = "Enter a valid contact number";
  }
  if (!values.address.trim()) {
    errors.address = "Enter Address";
  } else if (values.address.length <= 10) {
    errors.address = "Address is too short";
  }
  if (!values.datetime.trim()) {
    errors.datetime = "Enter date and time";
  }

  if (
    values.wetwaste === false &&
    values.drywaste === false &&
    values.medicalwaste === false &&
    values.others === false 
  ) {
    errors.garbagetype = "Select atleast one garbage type";
  }

  return errors;
}
export default Validation;
