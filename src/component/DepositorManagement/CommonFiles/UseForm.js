import { useState, useEffect} from "react";
import Validation from "./Validation";

function UseForm(edit) {

  const [values, setValues] = useState({
    taskname: "",
    garbagetype: {
      drywaste: "",
      wetwaste: "",
      medicalwaste: "",
      others: "",
    },
    weight: "",
    schedule: "Once",
    datetime: "",
    address: "",
    pincode: "",
    phonenumber: "",
  });

  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  function handleChange(event) {
    console.log(event.target.id + " " + event.target.value);
    let checkItems = ["drywaste", "wetwaste", "medicalwaste", "others"];
    if (checkItems.includes(event.target.id)) {
      let newgarbage = { ...values.garbagetype };
      newgarbage[event.target.name] = event.target.checked ? "checked" : "";
      values.garbagetype = newgarbage;
    } else {
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      });
      console.log(values)
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    setErrors(Validation(values));
    setIsValid(true);
  }

  useEffect(() => {
      if (Object.keys(errors).length === 0 && isValid) {
       setValues({
        taskname: "",
        garbagetype: "",
        weight: "",
        schedule: "Once",
        datetime: "",
        address: "",
        pincode: "",
        phonenumber: "",
      });
      }
     if (edit != null)
      {
        setValues({
          ...edit
        });
    }
     //eslint-disable-next-line
  }, [errors]);
  return { handleChange, handleSubmit, values, errors };
}
export default UseForm;
