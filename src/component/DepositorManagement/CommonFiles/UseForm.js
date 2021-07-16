import { useState, useEffect} from "react";
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
    instructions:"",
  });
  const [errormessage, setErrorMessage] = useState();
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  function handleChange(event) {
    console.log(event.target.name + " " + event.target.value);
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      });
      console.log("values: ", values)
      console.log("edit", edit)
  }

  function handleSubmit(event) {
    event.preventDefault();

    setErrors(Validation(values));
    setIsValid(true);
    if (Object.keys(errors).length === 0 && isValid)
    {
      let user = JSON.parse(localStorage.getItem("user"));
        console.log(user);
        const emailId = user.email;
        console.log(emailId);
      axios
      .post(Constants.CREATE_DEPOSIT, {
        userId: 1,
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
        instructions: values.instructions
      })
      .then(() => {
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
  }

  useEffect(() => {
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
        instructions:"",
      });
      }
     if (edit != null)
      {
        setValues({
          ...edit
        });
      console.log("values 2", values)
      console.log("Edit 2 ", edit)

    }
     //eslint-disable-next-line
  }, [errors]);
  return { handleChange, handleSubmit, values, errors, errormessage };
}
export default UseForm;
