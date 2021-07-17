import { useState, useEffect } from "react";
import Validation from "./Validation";
import axios from "axios";
import { Constants } from "../../../config/constants";

function UseForm(edit) {
  const [values, setValues] = useState({
    taskname: "",
    drywaste: false,
    wetwaste: false,
    medicalwaste: false,
    others: false,
    weight: "",
    schedule: "Once",
    datetime: "",
    address: "",
    pincode: "",
    phonenumber: "",
    instructions: "",
  });
  const [errormessage, setErrorMessage] = useState();
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setErrors(Validation(values));
    setIsValid(true);
    console.log(Object.keys(errors).length)
    console.log(isValid)
    if (Object.keys(errors).length === 0 && isValid) {
      let user = localStorage.getItem("user");
      console.log(user);
      if (user) {
        user = JSON.parse(user);
        const emailId = user.email;
        console.log(emailId);
        axios
          .post(Constants.CREATE_DEPOSIT, {
            userId: emailId,
            taskname: values.taskname,
            drywaste: values.drywaste,
            wetwaste: values.wetwaste,
            medicalwaste: values.medicalwaste,
            others: values.others,
            weight: values.weight,
            schedule: values.schedule,
            datetime: values.datetime,
            address: values.address,
            pincode: values.pincode,
            phonenumber: values.phonenumber,
            instructions: values.instructions,
          })
          .then(() => {
            if (Object.keys(errors).length === 0 && isValid) {
              setValues({
                taskname: "",
                drywaste: false,
                wetwaste: false,
                medicalwaste: false,
                others: false,
                weight: "",
                schedule: "Once",
                datetime: "",
                address: "",
                pincode: "",
                phonenumber: "",
                instructions: "",
              });
            }
            window.location.reload();
          })
          .catch((error) => {
            if (error.response != undefined) {
              setErrorMessage(error.response.data.message);
            } else {
              setErrorMessage(
                "Error in sending request. Please try again later."
              );
            }
          });
      }
      else {
        setValues({
          taskname: "",
          drywaste: false,
          wetwaste: false,
          medicalwaste: false,
          others: false,
          weight: "",
          schedule: "Once",
          datetime: "",
          address: "",
          pincode: "",
          phonenumber: "",
          instructions: "",
        });
        return window.alert("Please Login to Create Deposit");
      }
    } 
  }

  useEffect(() => {
    if (edit != null) {
      setValues({
        ...edit,
      });

    }
    //eslint-disable-next-line
  }, [errors]);
  return { handleChange, handleSubmit, values, errors, errormessage };
}
export default UseForm;
