import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  CardActions,
  Icon,
  Button,
} from "@material-ui/core";
import authHelper from './../auth/auth-helper';
import auth from "./api-auth.js";
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 400,
    margin: "0 auto",
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
    textAlign: "center",
  },
  textField: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  error: {
    verticalAlign: 'middle'
  },
  submit: {
    margin: "0 auto",
    marginBottom: theme.spacing(2),
  },
  title: {
    fontSize: 18,
  },
}));

export default function Signin(props) {
  const classes = useStyles()
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    error: '',
    redirectToReferrer: false
  })

  const clickSubmit = () => {
    const user = {
      username: values.username || undefined,
      email: values.email || undefined,
      password: values.password || undefined
    }

    auth.signin(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error })
      } else {
        authHelper.authenticate(data, () => {
          setValues({ ...values, error: '', redirectToReferrer: true })
        })
      }
    })
  }

  const handleChange = username => event => {
    setValues({ ...values, [username]: event.target.value })
  }

  const { from } = props.location.state || {
    from: {
      pathname: '/'
    }
  }
  const { redirectToReferrer } = values
  if (redirectToReferrer) {
    return (<Redirect to={from} />)
  }

  return (
  <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" className={classes.title}>
          Sign In
        </Typography>
        
        <TextField id="email" type="username" label="Username" className={classes.textField} value={values.username} onChange={handleChange('username')} margin="normal" /><br />

        <TextField id="email" type="email" label="Email" className={classes.textField} value={values.email} onChange={handleChange('email')} margin="normal" /><br />
        
        <TextField id="password" type="password" label="Password" className={classes.textField} value={values.password} onChange={handleChange('password')} margin="normal" />
        <br /> {
          values.error && (<Typography component="p" color="error">
            <Icon color="error" className={classes.error}>error</Icon>
            {values.error}
          </Typography>)
        }
      </CardContent>
      <CardActions>
        <Button color="primary" variant="contained" onClick={clickSubmit} className={classes.submit}>Sign In</Button>
      </CardActions>
    </Card>
  )
}
