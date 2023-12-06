import React from 'react';
import { useState, useEffect } from 'react';
import {
    Card,
    CardContent,
    Typography,
    TextField,
    CardActions,
    Icon,
    Button,
    Dialog,DialogTitle,DialogContent,DialogContentText,DialogActions,Link
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core';
import products from './api-products.js';
import { Redirect } from 'react-router-dom';

const EditItems = (props) => {
    const [values, setValues] = useState({
        colourway: "",
        model: "",
        price: 0,
    });
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = username => event => {
        setValues({ ...values, [username]: event.target.value })
    }

    //Complete
    const clickSubmit = () => {
        const updatedSneaker = {
            colourway: values.colourway || undefined,
            model: values.model || undefined,
            price: values.price || undefined,
        }

        products.update(updatedSneaker).then((data) => {
            if (data.message == "Your sneaker has been updated successful!") {
                setValues({ ...values, error: '', redirectToReferrer: true });
                setOpen(true);
            } else {
                console.log(data.message);
            }
        })
    }

    function handleClose() {
        return <Redirect to="/"/>;
    }

    return (
        <Card >
            <CardContent>
                <Typography variant="h5">
                    Edit Sneaker
                </Typography>
                <TextField id="colourway" label="Colourway" value={values.colourway} onChange={handleChange('colourway')} margin="normal" /><br />
                <TextField id="model" label="Model" value={values.model} onChange={handleChange('model')} margin="normal" /><br />
                <TextField id="price" label="Price" value={values.price} onChange={handleChange('price')} margin="normal" /><br />
                <br />
                {
                    values.error &&
                    (
                        <Typography component="p" color="error">
                            <Icon color="error" className={classes.error}>error</Icon>
                            {values.error}
                        </Typography>
                    )
                }
            </CardContent>
            <CardActions>
                <Button color="primary" variant="contained" onClick={clickSubmit}>Update Sneaker</Button>
            </CardActions>


            {/* <Dialog open={open} onClose={handleClose} disableEscapeKeyDown>
                <DialogTitle>Updated Sneaker</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        A sneaker successfully been updated.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Link to="/featuredItems">
                        <Button
                            color="primary"
                            autoFocus
                            variant="contained"
                            onClick={handleClose}
                        >
                            Return home
                        </Button>
                    </Link>
                </DialogActions>
            </Dialog> */}
        </Card>
    );
};

export default EditItems;