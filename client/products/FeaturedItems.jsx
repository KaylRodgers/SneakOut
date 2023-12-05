import React from 'react';
import { useState } from 'react';
import products from './api-products.js'


const FeaturedItems = () => {
    const [sneakers, setSneakers] = useState([])

    const abortController = new AbortController()
    const signal = abortController.signal;
    products.list(signal).then((data) => {
        setSneakers(data);
    })


    return (
        // <div id="featured-items" className="shoes">
        <div>
            {sneakers.map((item, index) => (
                <div key={index}>
                    <img src={item.link}/>
                    <p>Brand: {item.model}</p>
                    <p>Colourway: {item.colourway}</p>
                    <p>Price: ${item.price.toFixed(2)}</p>
                    {/* <p>{item._id}</p> */}
                </div>
            ))}
        </div>
    );
};

export default FeaturedItems;