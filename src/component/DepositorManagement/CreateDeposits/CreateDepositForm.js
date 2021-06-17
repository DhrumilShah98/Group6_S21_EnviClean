import useStyles from "./styles.js";
import {
  TextField,
  Button,
  Typography,
  Paper,
  FormControl,
  FormControlLabel,
  Checkbox,
  FormLabel,
  FormGroup,
  FormHelperText,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import UseForm from "./UseForm.js";

function CreateDeposit() {
  const { handleChange, handleSubmit, values, errors } = UseForm();
  const classes = useStyles();
  return (
    <Paper className={classes.paper} elevation={6}>
      <form
        className={`${classes.root} ${classes.form}`}
        autoComplete="off"
        noValidate
      >
        <Typography variant="h6">Deposit Garbage</Typography>
        <TextField className = {`${classes.text}`}
          fullWidth
          margin="normal"
          size="small"
          id="taskname"
          type="text"
          name="taskname"
          label="Task Name"
          variant="outlined"
          required
          value={values.taskname}
          onChange={handleChange}
          error={errors.taskname ? true:false}
          helperText={errors.taskname}
        />
        <FormControl
          required
          component="fieldset"
          className={classes.formControl}
          error = {errors.garbagetype ? true:false}
        >
          <FormLabel component="legend">Garbage Type</FormLabel>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleChange}
                  name="drywaste"
                  value={values.garbagetype.drywaste}
                  id="drywaste"
                  color="primary"
                />
              }
              label="Dry"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleChange}
                  name="wetwaste"
                  value={values.garbagetype.wetwaste}
                  id="wetwaste"
                  color="primary"
                />
              }
              label="Wet"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleChange}
                  name="medicalwaste"
                  value={values.garbagetype.medicalwaste}
                  id="medicalwaste"
                  color="primary"
                />
              }
              label="Medical"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleChange}
                  name="others"
                  value={values.garbagetype.others}
                  id="others"
                  color="primary"
                />
              }
              label="Others"
            />
          </FormGroup>
          <FormHelperText>{errors.garbagetype}</FormHelperText>
        </FormControl>
        <TextField
          fullWidth
          margin="normal"
          size="small"
          id="weight"
          type="number"
          name="weight"
          label="Approximate Weight in kgs"
          variant="outlined"
          required
          value={values.weight}
          onChange={handleChange}
          error={errors.weight ? true:false}
          helperText={errors.weight}
        />
        <FormControl component="fieldset" error = {errors.schedule ? true:false}className= {classes.form}>
          <FormLabel component="legend">Schedule Deposit</FormLabel>
          <RadioGroup
            row
            aria-label="schedule"
            name="schedule"
            value={values.schedule}
            onChange={handleChange}
            defaultValue="Once"
            
          >
            <FormControlLabel
              value="Once"
              control={<Radio color="primary" />}
              label="Once"
            />
            <FormControlLabel
              value="Daily"
              control={<Radio color="primary" />}
              label="Daily"
            />
            <FormControlLabel
              value="Weekly"
              control={<Radio color="primary" />}
              label="Weekly"
            />
          </RadioGroup>
        </FormControl>
        <TextField
          fullWidth
          margin="normal"
          size="small"
          id="datetime"
          type="datetime-local"
          name="datetime"
          label="Deposit Time"
          variant="outlined"
          required
          value={values.datetime}
          onChange={handleChange}
          error={errors.datetime ? true:false}
          helperText={errors.datetime}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            min: `${new Date().getFullYear()}-${`${
              new Date().getMonth() + 1
            }`.padStart(2, 0)}-${`${new Date().getDate() + 1}`.padStart(
              2,
              0
            )}T${`${new Date().getHours()}`.padStart(
              2,
              0
            )}:${`${new Date().getMinutes()}`.padStart(2, 0)}`,
          }}
        />
        <TextField
          fullWidth
          margin="normal"
          size="small"
          id="address"
          type="text"
          name="address"
          label="Deposit Address"
          variant="outlined"
          required
          multiline
          rows={3}
          value={values.address}
          onChange={handleChange}
          error = {errors.address ? true:false}
          helperText={errors.address}
        />
        <TextField
          fullWidth
          margin="normal"
          size="small"
          id="pincode"
          type="text"
          name="pincode"
          label="Deposit Address Pincode"
          variant="outlined"
          required
          value={values.pincode}
          onChange={handleChange}
          error = {errors.pincode ? true:false}
          helperText={errors.pincode}
        />
        <TextField
          fullWidth
          margin="normal"
          size="small"
          id="phonenumber"
          type="number"
          name="phonenumber"
          label="Depositer Phone Number"
          variant="outlined"
          required
          value={values.phonenumber}
          onChange={handleChange}
          error = {errors.phonenumber ? true:false}
          helperText={errors.phonenumber}
        />
        <TextField
          fullWidth
          margin="normal"
          size="small"
          id="instructions"
          type="text"
          name="instructions"
          label="Instructions if any"
          variant="outlined"
          value={values.instructions}
          onChange={handleChange}
          helperText={errors.instructions}
        />
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          size="large"
          type="submit"
          onClick={handleSubmit}
          style= {{backgroundColor:"#00ff00"}}
        >
          Deposit Now
        </Button>
      </form>
    </Paper>
  );
}
export default CreateDeposit;
