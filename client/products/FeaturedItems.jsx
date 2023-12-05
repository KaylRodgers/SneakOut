import React from 'react';
import { useState } from 'react';
import products from './api-products.js'
import './FeaturedItems.css'

const FeaturedItems = () => {
    const [sneakers, setSneakers] = useState([])

    const abortController = new AbortController()
    const signal = abortController.signal;
    products.list(signal).then((data) => {
        setSneakers(data);
    })



    return (
        <div id="featured-items">
            {sneakers.map((item, index) => (
                <div key={index} id="item">
                    <img src={item.link} />
                    <div id="details">
                        <p>Brand: {item.model}</p>
                        <p>Colourway: {item.colourway}</p>
                        <p>Price: ${item.price.toFixed(2)}</p>
                        {/* <p>{item._id}</p> */}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FeaturedItems;