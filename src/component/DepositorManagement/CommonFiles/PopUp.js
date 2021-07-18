/* Author Sriram Attanti*/
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import { DialogContent, Typography } from "@material-ui/core";
import useStyles from "./styles.js";

function PopUp(props) {
  const { heading, children, open, setopen } = props;
  const classes = useStyles();
  return (
    <div>
      <Dialog open={open} maxWidth= "xs" >
          <div>
        <DialogTitle disableTypography>
          <Typography
            variant="h6"
            className={classes.form}
            style={{ color: "#154001", fontWeight: 600 }}
          >
            {heading}
          </Typography>
        </DialogTitle>
        </div>
        <DialogContent setopen = {setopen}>
        {children}</DialogContent>
      </Dialog>
    </div>
  );
}
export default PopUp;
