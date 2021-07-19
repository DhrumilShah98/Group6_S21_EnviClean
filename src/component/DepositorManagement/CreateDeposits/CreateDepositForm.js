/* Author Sriram Attanti*/
import useStyles from "./styles.js";
import { Button,  Paper, Typography} from "@material-ui/core";
import UseForm from "../CommonFiles/UseForm.js";
import DepositForm from "../CommonFiles/DepositForm.js";

function CreateDeposit() {
  const { handleChange, handleSubmit, values, errors, errormessage } = UseForm();
  const classes = useStyles();
  return (
    <Paper className={classes.paper} elevation={6}>
      <form
        className={`${classes.root} ${classes.form}`}
        noValidate>
          <Typography variant="h6" style={{ color: "#154001", fontWeight: 600 }}>Deposit Garbage</Typography>
      <DepositForm 
      handleChange= {handleChange}
      values= {values}
      errors={ errors}></DepositForm>
      <Button
          className={classes.buttonSubmit}
          variant="contained"
          size="large"
          onClick ={handleSubmit}
          style={{ backgroundColor: "#154001" }}
          error={errormessage ? true : false}
          helperText={errormessage}>
          Deposit Now
        </Button>
           
        </form>
    </Paper>
  );
}
export default CreateDeposit;
