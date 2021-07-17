import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import axios from "axios";
import { Constants } from "../../../config/constants";

function DeleteDeposit(props) {
  const { open, setopen, id } = props;
  const [errormessage, setErrorMessage] = useState();
  
  function handleCancel(event) {
    event.preventDefault();
    window.location.reload();
  }
  function handleConfirm(event) {
    event.preventDefault();
    axios
      .delete(Constants.DELETE_DEPOSIT + id)
      .then((response) => {
        window.location.reload();
      })
      .catch((error) => {
        if (error.response !== undefined) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage(
            "Error in Deleting the deposit request. Please try again later."
          );
        }
      });
  }
  return (
    <div>
      <Dialog open={open} onClose={handleCancel}>
        <DialogTitle>{"Please confirm to delete the deposit !!!"}</DialogTitle>

        <DialogActions>
          <Button onClick={() => setopen(false)} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleConfirm}
            style={{ backgroundColor: "#ff0000", color: "#FFFFFF" }}
            error={errormessage ? true : false}
            helperText={errormessage}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default DeleteDeposit;
