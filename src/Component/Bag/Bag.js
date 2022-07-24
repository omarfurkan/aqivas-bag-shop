import React from 'react';
import './Bag.css'

const Bag = ({ bag }) => {
    return (
        <div className='bag'>
            <img src={bag.img} alt="" />
            <h3>{bag.name}</h3>
            <p>Id: {bag.id}</p>
            <p>Price <span>${bag.price}</span></p>
            <div className='cart-btn'>
                <button >Add to Cart</button>
            </div>

        </div>
    );
};

export default Bag;