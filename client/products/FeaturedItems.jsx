import React from 'react';

const featuredItems = [
  { link: "https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/w_300,c_limit/11a6339a-52c7-4e6f-8852-f7aa73896423/air-jordan-11-varsity-red-is-a-blast-from-the-past-with-a-cherry-on-top.png", brand: "Jordan", colourway: "Varsity Red", price: 299.99 },
  { link: "https://the-vault-au.com/cdn/shop/products/image-removebg-preview-2022-09-06T094011.019_1800x1800.png?v=1662421395", brand: "Jordan", colourway: "Pinksicle", price: 381.00 },
  { link: "https://offtrendclub.com/cdn/shop/products/Jordan-Stay-Loyal-White-Rift-Blue-angle.png?v=1672781304&width=1024", brand: "Jordan", colourway: "Stay Loyal White Rift Blue", price: 399.99 },
  { link: "https://dreamysneakers.com/cdn/shop/products/Air_Jordan_4_Retro_Military_Black_2.webp?v=1654374268&width=1946", brand: "Jordan", colourway: "Military Black", price: 499.99 },
];

const FeaturedItems = () => {
  return (
    <div id="featured-items" className="shoes">
      {featuredItems.map((item, index) => (
        <div key={index} className="featured-item"
        style = "">
          <img src={item.link} alt={`${item.brand} - ${item.colourway}`} className="featured-item-img" />
          <p>Brand: {item.brand}</p>
          <p>Colourway: {item.colourway}</p>
          <p>Price: ${item.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturedItems;