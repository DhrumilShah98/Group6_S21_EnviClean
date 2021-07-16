import { useState, useEffect} from "react";
import Validation from "./Validation";

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
  });

  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  function handleChange(event) {
    console.log(event.target.name + " " + event.target.value);
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      });
      console.log(values)
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
      });
      }
     if (edit != null)
      {
        // console.log(edit)
        // let checkItems = ["drywaste", "wetwaste", "medicalwaste", "others"];
        // if (checkItems.includes(edit.garbagetype)) {
        // let newgarbage = { ...edit};
        // console.log(newgarbage)
        // newgarbage[garbagetype] =  true;
        // edit.garbagetype = newgarbage;
        // console.log(edit)
        setValues({
          ...edit
        });
      
    }
     //eslint-disable-next-line
  }, [errors]);
  return { handleChange, handleSubmit, values, errors };
}
export default UseForm;
