import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react';
import authHelper from './../auth/auth-helper';
import userRouter from './api-user.js';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 600,
        margin: 'auto',
        textAlign: 'center',
        marginTop: theme.spacing(5),
        paddingBottom: theme.spacing(2)
    },
    title: {
        margin: theme.spacing(2),
        color: theme.palette.protectedTitle
    },
    error: {
        verticalAlign: 'middle'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 300
    },
    submit: {
        margin: 'auto',
        marginBottom: theme.spacing(2)
    },
    subheading: {
        marginTop: theme.spacing(2),
        color: theme.palette.openTitle
    }
}));

export default function UpdateProfile() {
    const classes = useStyles();
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        error: ''
    });

    const jwt = auth.isAuthenticated();

    const clickSubmit = () => {
        const user = {
            name: values.name || undefined,
            email: values.email || undefined,
            password: values.password || undefined
        }
        userRouter.update(user).then((data) => {
            if (data.error) {
                setValues({ ...values, error: data.error })
            } else {
                setValues({ ...values, error: '', open: true })
            }
        })
    }

    const change = name => event => {
        setValues({...values, [name]: event.target.value})
    }

    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h6" className={classes.title}>
                        Edit Profile
                    </Typography>
                    <TextField id="name" label="Name" className={classes.textField} value={values.name} onChange={change('name')} margin="normal" /><br />

                    <TextField id="email" type="email" label="Email" className={classes.textField} value={values.email} onChange={change('email')} margin="normal" /><br />

                    <TextField id="password" type="password" label="Password" className={classes.textField} value={values.password} onChange={change('password')} margin="normal" />

                    <br /> {
                        values.error && (<Typography component="p" color="error">
                            <Icon color="error" className={classes.error}>error</Icon>
                            {values.error}
                        </Typography>)
                    }
                </CardContent>
                <CardActions>
                    <Button color="primary" variant="contained" onClick={clickSubmit} className={classes.submit}>Submit</Button>
                </CardActions>
            </Card>
            <Dialog open={values.open} disableBackdropClick={true}>
                <DialogTitle>Updated account!</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Account successfully updated.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Link to="/signin">
                        <Button color="primary" autoFocus="autoFocus" variant="contained">
                            Sign In
                        </Button>
                    </Link>
                </DialogActions>
            </Dialog>
        </div>
    );
};