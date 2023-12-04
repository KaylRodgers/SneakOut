import React from 'react';
import './Home.css';
import './FeaturedItems';

const Home = () => {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="styles.css" />
                <title>Shoe Store</title>
            </head>
            <body>
                <top>
                    <section id="big-title">
                        <h1>SneakOut Exclusive Collection 2023</h1>
                        <img src="/images/BigShoe.png" alt="Big Shoe Image" />
                    </section>
                </top>

                <main>
                    <section id="quality-section">
                        <div className="quality-content">
                            <div className="quality-image-box">
                                <img src="https://shop.exclucitylife.com/cdn/shop/products/DC7351-300-PHSYD002-2000_850x.png?v=1629156298" alt="High-Quality Shoes Image" />
                            </div>
                            <div className="quality-text-box">
                                <h3>High Quality Shoes</h3>
                                <p>At our store, we are committed to providing you with the highest quality shoes. Our shoes are crafted with precision and care, using the finest materials to ensure durability, comfort, and style. Step into a world of luxury with our exceptional footwear collection.</p>
                            </div>
                        </div>
                    </section>

                    <section id="featured-items">
                        <h2>Featured Items</h2>
                        <div className="shoes">
                            
                        </div>
                    </section>
                </main>

                <script src="scripts.js"></script>
            </body>
        </html>
    );
}



export default Home;