import React from 'react';
import './Home.css';
import Product from './Product';

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/Holiday/GiftGuide/Fuji_TallHero_GG2_en_US_1x._CB418256337_.jpg" alt=""/>
            
                <div className="home__row">
                    <Product
                    title = "Dual Shock"
                    price = "19.99"
                    image = "https://images-na.ssl-images-amazon.com/images/I/71y%2BUGuJl5L._SL1500_.jpg" 
                    rating = {3} />

                    <Product
                    title = "Dual Shock"
                    price = "19.99"
                    image = "https://images-na.ssl-images-amazon.com/images/I/71y%2BUGuJl5L._SL1500_.jpg" 
                    rating = {3} />
                    <Product
                    title = "Dual Shock"
                    price = "19.99"
                    image = "https://images-na.ssl-images-amazon.com/images/I/71y%2BUGuJl5L._SL1500_.jpg" 
                    rating = {3} />
                    
                </div>
                <div className="home__row">
                    <Product
                    title = "Dual Shock"
                    price = "19.99"
                    image = "https://images-na.ssl-images-amazon.com/images/I/71y%2BUGuJl5L._SL1500_.jpg" 
                    rating = {3} />
                    <Product
                    title = "Dual Shock"
                    price = "19.99"
                    image = "https://images-na.ssl-images-amazon.com/images/I/71y%2BUGuJl5L._SL1500_.jpg" 
                    rating = {3} />
                    <Product
                    title = "Dual Shock"
                    price = "19.99"
                    image = "https://images-na.ssl-images-amazon.com/images/I/71y%2BUGuJl5L._SL1500_.jpg" 
                    rating = {3} />
                </div>
                <div className="home__row">
                    {/*Product*/}
                    {/*Product*/}
                    {/*Product*/}
                </div>
            
            </div>

        </div>
    )
}

export default Home
