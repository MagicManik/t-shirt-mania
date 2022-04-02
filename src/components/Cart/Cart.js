import React from 'react';
import './cart.css'

const Cart = ({ removeFromCart, cart }) => {
    // console.log(tShirt)
    return (
        <div className='cart'>
            {/* <h1>Hello</h1> */}
            <h1>Total Item: {cart.length}</h1>
            {
                cart.map(tShirt =>
                    <div key={tShirt._id}>
                        <p>{tShirt.name} <button onClick={() => (removeFromCart(tShirt))}>X</button></p>
                        <hr />

                    </div>)
            }
        </div>
    );
};

export default Cart;