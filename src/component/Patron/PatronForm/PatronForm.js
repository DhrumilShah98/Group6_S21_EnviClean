import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from './styles.js';

const Form = ({ patronPosts, setPatronPosts }) => {
    const classes = useStyles();
    const [formData, setFormData] = useState({ streetAddress: '', city: '', province: '', zipCode: '', selectedFile: '' });
    const [errors, setErrors] = useState({ streetAddressValid: false, cityValid: false, provinceValid: false, zipCodeValid: false, selectedFileValid: false });

    const validateFormData = () => {
        if (errors.streetAddressValid && errors.cityValid && errors.provinceValid && errors.zipCodeValid && errors.selectedFileValid) {
            return true;
        } else {
            return false;
        }
    };

    const clearFormData = () => {
        setFormData({ streetAddress: '', city: '', province: '', zipCode: '', selectedFile: '' });
        setErrors({ streetAddressValid: false, cityValid: false, provinceValid: false, zipCodeValid: false, selectedFileValid: false });
    }

    const validate = (e) => {
        switch (e.target.name) {
            case "streetAddress":
                if (e.target.value === "" || e.target.value === null) {
                    errors["streetAddress"] = "Street address is required."
                    errors["streetAddressValid"] = false;
                } else {
                    errors["streetAddress"] = "";
                    errors["streetAddressValid"] = true;
                }
                break;
            case "city":
                if (e.target.value === "" || e.target.value === null) {
                    errors["city"] = "City is required."
                    errors["cityValid"] = false;
                } else {
                    errors["city"] = "";
                    errors["cityValid"] = true;
                }
                break;
            case "province":
                if (e.target.value === "" || e.target.value === null) {
                    errors["province"] = "Province is required."
                    errors["provinceValid"] = false;
                } else {
                    errors["province"] = "";
                    errors["provinceValid"] = true;
                }
                break;
            case "zipCode":
                const isZipCodeCorrect = RegExp(/^[A-Za-z\d]+$/).test(e.target.value);
                if (e.target.value === "" || e.target.value === null) {
                    errors["zipCode"] = "Zip code is required."
                    errors["zipCodeValid"] = false;
                } else if (!isZipCodeCorrect || (e.target.value.length !== 6)) {
                    errors["zipCode"] = "Please enter a valid zip code."
                    errors["zipCodeValid"] = false;
                } else {
                    errors["zipCode"] = "";
                    errors["zipCodeValid"] = true;
                }
                break;
            case "selectedFile":
                if (e.target.value === "" || e.target.value === null) {
                    errors["selectedFile"] = "Image is required."
                    errors["selectedFileValid"] = false;
                } else {
                    errors["selectedFile"] = "";
                    errors["selectedFileValid"] = true;
                }
                break;
            default:
                break;
        }
        setErrors(errors);
    };

    const onChange = (e) => {
        validate(e);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateFormData()) {
            formData["_id"] = patronPosts.length + 1;
            formData["createdAt"] = new Date().toISOString();
            formData["myPost"] = true;
            formData["display"] = true;
            setPatronPosts(patronPosts => [...patronPosts, formData]);
            clearFormData();
        }
    };

    return (
        <Paper className={classes.paper} elevation={6}>
            <form className={`${classes.root} ${classes.form}`} autoComplete="off" noValidate>
                <Typography variant="h6">Post Garbage</Typography>
                <TextField
                    fullWidth
                    margin="normal"
                    id="streetAddress"
                    type="text"
                    name="streetAddress"
                    label="Street Address"
                    variant="outlined"
                    required
                    value={formData.streetAddress}
                    onChange={onChange}
                    error={errors["streetAddress"] ? true : false}
                    helperText={errors["streetAddress"]} />
                <TextField
                    fullWidth
                    margin="normal"
                    id="city"
                    type="text"
                    name="city"
                    label="City"
                    variant="outlined"
                    required
                    value={formData.city}
                    onChange={onChange}
                    error={errors["city"] ? true : false}
                    helperText={errors["city"]} />
                <TextField
                    fullWidth
                    margin="normal"
                    id="province"
                    type="text"
                    name="province"
                    label="Province"
                    variant="outlined"
                    required
                    value={formData.province}
                    onChange={onChange}
                    error={errors["province"] ? true : false}
                    helperText={errors["province"]} />
                <TextField
                    fullWidth
                    margin="normal"
                    id="zipCode"
                    type="text"
                    name="zipCode"
                    label="Zip Code"
                    variant="outlined"
                    required
                    value={formData.zipCode}
                    onChange={onChange}
                    error={errors["zipCode"] ? true : false}
                    helperText={errors["zipCode"]} />
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        label="Garbage Image"
                        onDone={({ base64 }) => {
                            setFormData({ ...formData, selectedFile: base64 })
                            setErrors({ ...errors, selectedFile: "", selectedFileValid: true })
                        }} />
                </div>
                <Button
                    className={classes.buttonSubmit}
                    disabled={!validateFormData()}
                    variant="contained"
                    size="large"
                    type="submit"
                    onClick={handleSubmit}
                    fullWidth>Submit</Button>
            </form>
        </Paper>
    );
}

export default Form;