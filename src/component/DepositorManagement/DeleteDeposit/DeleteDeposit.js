import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

function DeleteDeposit(props) {
const {open,setopen, id}= props
  function handleCancel() {
    setopen(false);
  }
  function handleConfirm() {
    setopen(false);
  }
  return (
    <div>
      <Dialog open= {open} onClose={handleCancel} >
        <DialogTitle >
          {"Please confirm to delete the deposit !!!"}
        </DialogTitle>

        <DialogActions>
          <Button onClick={()=> setopen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirm} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default DeleteDeposit;
