import React from 'react';
import { useState } from 'react';
import products from './api-products.js'
import {
    Card,
    CardContent,
    Typography,
    TextField,
    CardActions,
    Icon,
    Button,
  } from "@material-ui/core";
import { makeStyles } from '@material-ui/core';



const CreateItems = () => {
    const [values, setValues] = useState({
        
    })


    return (
        <Card >
            <CardContent>
              <Typography variant="h5">
                    Edit Sneaker
              </Typography>
              
              {/* <TextField id="email" type="username" label="Username" value={values.username} onChange={handleChange('username')} margin="normal" /><br />
      
              <TextField id="email" type="email" label="Email" value={values.email} onChange={handleChange('email')} margin="normal" /><br />
              
              <TextField id="password" type="password" label="Password" value={values.password} onChange={handleChange('password')} margin="normal" /> */}
              {/* <br /> {
                values.error && (<Typography component="p" color="error">
                  <Icon color="error" className={classes.error}>error</Icon>
                  {values.error}
                </Typography>)
              } */}
            </CardContent>
            <CardActions>
              {/* <Button color="primary" variant="contained" onClick={clickSubmit} className={classes.submit}>Sign In</Button> */}
            </CardActions>
          </Card>
        );
};
export default CreateItems;