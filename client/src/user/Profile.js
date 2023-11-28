import React, { useState, useEffect } from 'react'
import authHelper from './../auth/auth-helper'
import userRouter from './api-user.js'
import {Redirect, Link} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    root: theme.mixins.gutters({
        maxWidth: 600,
        margin: 'auto',
        padding: theme.spacing(3),
        marginTop: theme.spacing(5)
    }),
    title: {
        margin: `${theme.spacing(3)}px 0 ${theme.spacing(2)}px`,
        color: theme.palette.protectedTitle
    }
}));

export default function Profile() {
    const classes = useStyles();
    const [user, setUser] = useState({});
    const [redirectToSignin, setRedirectToSignIn] = useState(false);
    const jwt = authHelper.isAuthenticated();

    useEffect(() => {
        const abortController = new AbortController();
        
        const signal = abortController.signal;
        
        userRouter.listUsers({ t: jwt.token }).then(
            (data) => {
                if (data && data.error) {
                    setRedirectToSignin(true)
                } else {
                    setUser(data)
                }
            }
        );

        return function abort(){
            abortController.abort();
        };
    });

    if (redirectToSignin) {
        return <Redirect to='/auth/signin'/>
    }

    return (
        <Paper className={classes.root} elevation={4}>
        <Typography variant="h6" className={classes.title}>
          Profile
        </Typography>
        <List dense>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Person/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={user.username} secondary={user.email}/> {
             authHelper.isAuthenticated().user && authHelper.isAuthenticated().user._id == user._id &&
             (<ListItemSecondaryAction>
               <Link to={"/user/edit/" + user._id}>
                 <IconButton aria-label="Edit" color="primary">
                   <Edit/>
                 </IconButton>
               </Link>
               <DeleteUser userId={user._id}/>
             </ListItemSecondaryAction>)
            }
          </ListItem>
          <Divider/>
          <ListItem>
            <ListItemText primary={"Joined: " + (
              new Date(user.created)).toDateString()}/>
          </ListItem>
        </List>
        <MyOrders/>
      </Paper>
    );
}