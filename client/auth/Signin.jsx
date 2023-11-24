import { useState } from "react";
import AuthManager from "./auth-helper.js";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  CardActions,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "./api-auth.js";

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
    color: "red",
  },
  submit: {
    margin: "0 auto",
    marginBottom: theme.spacing(2),
  },
  title: {
    fontSize: 18,
  },
}));

export default function Signin() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const clickSubmit = () => {
    const user = {
      email: values.email || undefined,
      password: values.password || undefined,
    };

    // Replace with your authentication function (e.g., signin)
    signin(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        let auth = new AuthManager();
        auth.authenticate(data.token, () => {
          setValues({ ...values, error: "" });
          setOpen(true);// Redirect to the home page after successful login
        });

      }
    });
  };

  return (
    <>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6" className={classes.title}>
            Sign In
          </Typography>
          <TextField
            label="Email"
            className={classes.textField}
            type="email"
            onChange={handleChange("email")}
            value={values.email}
          />
          <TextField
            label="Password"
            className={classes.textField}
            type="password"
            onChange={handleChange("password")}
            value={values.password}
          />
        </CardContent>
        {values.error && (
          <Typography variant="body2" className={classes.error}>
            {values.error}
          </Typography>
        )}
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={clickSubmit}
          >
            Sign In
          </Button>
        </CardActions>
      </Card>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Account</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Successfully Signed in.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to="/">
            <Button
              color="primary"
              autoFocus
              variant="contained"
              onClick={handleClose}
            >
              Exit
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </>



  );
}
