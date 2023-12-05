import React from 'react';
import { useState } from 'react';
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
import products from './api-products.js'



const CreateItems = () => {
    const [values, setValues] = useState({
        link: "",
        colourway: "",
        model: "",
        price: 0

    })

    const handleChange = username => event => {
        setValues({ ...values, [username]: event.target.value })
    }

    //Complete
    const clickSubmit = () => {
        const sneaker = {
            link: values.link || undefined,
            colourway: values.colourway || undefined,
            model: values.model || undefined,
            price: values.price || undefined
        }

        products.create(sneaker).then((data) => {
            if (data.error) {
                console.log(data.error);
                setValues({ ...values, error: data.error })

            } else {
                setValues({ ...values, error: '', redirectToReferrer: true })
            }
        })
    }

    return (
        <Card >
            <CardContent>
                <Typography variant="h5">
                    Edit Sneaker
                </Typography>

                <TextField id="link" label="Image Link" value={values.link} onChange={handleChange('link')} margin="normal" /><br />
                <TextField id="colourway" label="Colourway" value={values.colourway} onChange={handleChange('colourway')} margin="normal" /><br />
                <TextField id="model" label="Model" value={values.model} onChange={handleChange('model')} margin="normal" /><br />
                <TextField id="price" label="Price" value={values.price} onChange={handleChange('price')} margin="normal" /><br />

                <br /> {
                    values.error && (<Typography component="p" color="error">
                        <Icon color="error" className={classes.error}>error</Icon>
                        {values.error}
                    </Typography>)
                }
            </CardContent>
            <CardActions>
                <Button color="primary" variant="contained" onClick={clickSubmit}>Create Sneaker</Button>
            </CardActions>
        </Card>
    );
};
export default CreateItems;