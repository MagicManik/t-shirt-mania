import React from 'react';
import './Tshirt.css'

const Tshirt = ({ addToCart, tShirt }) => {
    // console.log(tShirt)
    const { picture, name, price } = tShirt;
    // console.log(picture)
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <p>{name}</p>
            <p>Price: ${price}</p>
            <div className='add-to-bag'>
                <button onClick={() => addToCart(tShirt)}>Add to Bag</button>
            </div>
        </div>
    );
};

export default Tshirt;