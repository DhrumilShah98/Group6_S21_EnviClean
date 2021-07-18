/* Dhrumil Amish Shah */
import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { createPatronPost } from '../../../apis/patronPostAPIs.js';
import useStyles from './styles.js';

const Form = ({ patronPosts, setPatronPosts }) => {
    const classes = useStyles();
    const [formData, setFormData] = useState({ streetAddress: '', city: '', province: '', zipCode: '', garbageImage: '' });
    const [errors, setErrors] = useState({ streetAddressValid: false, cityValid: false, provinceValid: false, zipCodeValid: false, garbageImageValid: false });

    const validateFormData = () => {
        if (errors.streetAddressValid && errors.cityValid && errors.provinceValid && errors.zipCodeValid && errors.garbageImageValid) {
            return true;
        } else {
            return false;
        }
    };

    const clearFormData = () => {
        setFormData({ streetAddress: '', city: '', province: '', zipCode: '', garbageImage: '' });
        setErrors({ streetAddressValid: false, cityValid: false, provinceValid: false, zipCodeValid: false, garbageImageValid: false });
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
            case "garbageImage":
                if (e.target.files === null || e.target.files[0] === null) {
                    errors["garbageImage"] = "Image is required."
                    errors["garbageImageValid"] = false;
                } else {
                    errors["garbageImage"] = "";
                    errors["garbageImageValid"] = true;
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

    const onImageChange = (e) => {
        validate(e);
        const imageFile = e.target.files[0];
        setFormData({
            ...formData,
            [e.target.name]: imageFile
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateFormData()) {
            const userId = parseInt(JSON.parse(localStorage.getItem("user")).id);
            const patronPostData = new FormData();
            patronPostData.append("userId", userId);
            patronPostData.append("garbageImage", formData.garbageImage);
            patronPostData.append("streetAddress", formData.streetAddress);
            patronPostData.append("city", formData.city);
            patronPostData.append("province", formData.province);
            patronPostData.append("zipCode", formData.zipCode);
            createNewPatronPost(patronPostData);
        }
    };

    async function createNewPatronPost(patronPostData) {
        try {
            await createPatronPost(patronPostData).then((res) => {
                const responseExists = (res.data !== null || res.data !== undefined)
                if (responseExists) {
                    res.data.payload.patronPostInsert.display = true;
                    setPatronPosts(patronPosts => [res.data.payload.patronPostInsert, ...patronPosts]);
                    clearFormData();
                }
            }).catch((err) => {
                setPatronPosts(patronPosts);
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Paper className={classes.paper} elevation={6}>
            <form className={`${classes.root} ${classes.form}`} autoComplete="off" noValidate method="POST" enctype="multipart/form-data">
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
                    <input
                        fullWidth
                        id="garbageImage"
                        type="file"
                        name="garbageImage"
                        accept="image/*"
                        required
                        onChange={onImageChange}
                        error={errors["garbageImage"] ? true : false}
                        helperText={errors["garbageImage"]} />
                </div>
                <Button
                    className={classes.buttonSubmit}
                    variant="contained"
                    disabled={!validateFormData()}
                    size="large"
                    type="submit"
                    onClick={handleSubmit}
                    fullWidth>Submit</Button>
            </form>
        </Paper>
    );
}

export default Form;