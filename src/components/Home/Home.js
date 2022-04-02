import React, { useState } from 'react';
import useTShirts from '../../hooks/useTShirts';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'

const Home = () => {
    const [tShirts, setTShirts] = useTShirts();
    // console.log(tShirts);
    const [cart, setCart] = useState([]);

    const addToCart = clickedItem => {
        const findClickedItem = cart.find(tShirt => tShirt._id === clickedItem._id);
        if (!findClickedItem) {
            setCart([...cart, clickedItem]);
        }
        else {
            alert('This Item Already Added')
        }
    }

    const removeFromCart = (clickedItem) => {
        const catchWithOutClickedItem = cart.filter(tShirt => tShirt._id !== clickedItem._id);
        setCart(catchWithOutClickedItem);
    }
    return (
        <div className='home-container'>
            <div className='product-container'>
                {
                    tShirts.map(tShirt => <Tshirt key={tShirt._id} addToCart={addToCart} tShirt={tShirt}></Tshirt>)
                }
            </div>
            <div className='cart-container'>
                <Cart removeFromCart={removeFromCart} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;