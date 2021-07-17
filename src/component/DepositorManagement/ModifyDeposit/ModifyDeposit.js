import useStyles from "./styles.js";
import { Button} from "@material-ui/core";
import UseForm from "../CommonFiles/UseForm.js";
import DepositForm from "../CommonFiles/DepositForm.js";
import Validation from "../CommonFiles/Validation";
import { useState} from "react";
import axios from "axios";
import { Constants } from "../../../config/constants";

function ModifyDeposit(props) {
    const { edit } = props;
  const { handleChange, values } = UseForm(edit);
  const classes = useStyles();
  const [formerrors, setFormErrors] = useState({});
  const [errormessage, setErrorMessage] = useState();

  function handleUpdate(event)
  {
    const id = edit.id
    setFormErrors(Validation(values));
    if (Object.keys(formerrors).length === 0) 
    {
    axios
        .put(Constants.UPDATE_DEPOSIT + id, {
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
        instructions: values.instructions})
        .then((response) => {
          window.location.reload();
          console.log(values);           
        })
        .catch((error) => {
          if (error.response !== undefined) {
            setErrorMessage(error.response.data.message);
          } else {
            setErrorMessage(
              "Error in updating the deposit request. Please try again later."
            );
          }
        });
      }
    event.preventDefault();
  }

  function handleCancel(event)
  {
    event.preventDefault();
    window.location.reload();
  }
  return (
      <form
        className={`${classes.root} ${classes.form}`}
        autoComplete="off"
        noValidate>
      <DepositForm 
      handleChange= {handleChange}
      values= {values}
      errors={ formerrors}></DepositForm>
      <Button
          className={classes.buttonSubmit}
          variant="contained"
          size="large"
          type="submit"
          onClick={handleUpdate}
          style={{ backgroundColor: "#6495ED" }}
          error={errormessage ? true : false}
          helperText={errormessage}>
          Update Deposit
        </Button>
        <Button
        className={classes.buttonSubmit}
          variant="contained"
          size="large"
          type="submit"
          onClick={handleCancel}
          style={{ backgroundColor: "#D3D3D3" }}>
          Cancel
        </Button>
        </form>
  );
}
export default ModifyDeposit;
