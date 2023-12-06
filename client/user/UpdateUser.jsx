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
import UserCtrl from './api-user.js';
import { Redirect } from 'react-router-dom';

const UpdateUser = (props) => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: ""
    });
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = username => event => {
        setValues({ ...values, [username]: event.target.value })
    }

    //Complete
    const clickSubmit = () => {
        const user = {
            username: values.username || undefined,
            email: values.email || undefined,
            password: values.password || undefined,
          };

        UserCtrl.update(user).then((data) => {
            if (data.message == "Update successful!") {
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
                    Edit User
                </Typography>
                <TextField id="username" label="Username" value={values.username} onChange={handleChange('username')} margin="normal" /><br />

                <TextField id="email" label="Email" value={values.email} onChange={handleChange('email')} margin="normal" /><br />
                
                <TextField id="password" label="Password" value={values.password} onChange={handleChange('password')} margin="normal" /><br />
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

export default UpdateUser;