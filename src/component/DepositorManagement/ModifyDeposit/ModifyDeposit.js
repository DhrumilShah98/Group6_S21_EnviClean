import useStyles from "./styles.js";
import { Button} from "@material-ui/core";
import UseForm from "../CommonFiles/UseForm.js";
import DepositForm from "../CommonFiles/DepositForm.js";

function ModifyDeposit(props) {
    const {setopen, edit } = props;
  const { handleChange, values, errors } = UseForm(edit);
  console.log(edit)
  const classes = useStyles();

  

  function handleUpdate()
  {

  }
  console.log(values)
  return (
      <form
        className={`${classes.root} ${classes.form}`}
        autoComplete="off"
        noValidate>
      <DepositForm 
      handleChange= {handleChange}
      values= {values}
      errors={ errors}></DepositForm>
      <Button
          className={classes.buttonSubmit}
          variant="contained"
          size="large"
          type="submit"
          onClick={handleUpdate}
          style={{ backgroundColor: "#6495ED" }}>
          Update Deposit
        </Button>
        <Button
        className={classes.buttonSubmit}
          variant="contained"
          size="large"
          type="submit"
          onClick={()=>setopen(false)}
          style={{ backgroundColor: "#D3D3D3" }}>
          Cancel
        </Button>
        </form>
  );
}
export default ModifyDeposit;
