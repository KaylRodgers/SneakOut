import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from 'react-router-dom';
import userRouter from './api-user.js';
import React, { useState } from 'react';

import * as userRouter from './api-user.js';
import React, { useState } from 'react';
import userRouter from './user/api-user'; // Adjust the path based on your actual structure

const Signup = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = () => {
    const user = {
      username: values.username,
      email: values.email,
      password: values.password,
    };

    userRouter.create(user).then((data) => {
      console.log(data);
    });
  };

  return (
    <div>
      {/* ... (Form components and layout) ... */}
      <button onClick={handleSubmit}>Create User</button>
    </div>
  );
};

export default Signup;

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 600,
        margin: 'auto',
        textAlign: 'center',
        marginTop: theme.spacing(5),
        paddingBottom: theme.spacing(2)
    },
    error: {
        verticalAlign: 'middle'
    },
    title: {
        marginTop: theme.spacing(2),
        color: theme.palette.openTitle
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 300
    },
    submit: {
        margin: 'auto',
        marginBottom: theme.spacing(2)
    }
}))
    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h6" className={classes.title}>
                        Sign Up
                    </Typography>
                    
                    <TextField id="username" label="Username" className={classes.textField}
                    // value={values.username}
                    onChange={change('username')} margin="normal" /><br />
                    
                    <TextField id="email" type="email" label="Email" className={classes.textField} value={values.email} onChange={change('email')} margin="normal" /><br />
                    
                    <TextField id="password" type="password" label="Password" className={classes.textField} value={values.password} onChange={change('password')} margin="normal" />
                    <br /> {
                        values.error && (<Typography component="p" color="error">
                            <Icon color="error" className={classes.error}>error</Icon>
                            {values.error}</Typography>)
                    }
                </CardContent>
                <CardActions>
                    <Button color="primary" variant="contained" onClick={submit} className={classes.submit}>Submit</Button>
                </CardActions>
            </Card>
            <Dialog open={values.open}>
                <DialogTitle>New Account</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        New account successfully created.
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
    )
        ;
