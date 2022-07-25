import React from 'react';
import { BsFillCartFill } from "react-icons/bs";
import './Bag.css'

const Bag = ({ bag, handleCart }) => {


    return (
        <div className='bag'>
            <img src={bag.img} alt="" />
            <h3>{bag.name}</h3>
            <p>Id: {bag.id}</p>
            <p>Price <span>${bag.price}</span></p>
            <div className='cart-btn'>
                <button onClick={() => handleCart(bag)}>Add to Cart <BsFillCartFill className='icon' /></button>
            </div>

        </div >
    );
};

export default Bag;