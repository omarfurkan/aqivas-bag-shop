import React from 'react';
import './Cart.css'
import { AiFillDelete } from "react-icons/ai";
const Cart = ({ item }) => {
    return (
        <div className='carts'>
            <img src={item.img} alt="" />
            <h4>{item.name}</h4>
            <p><AiFillDelete className='icon' /></p>
        </div>
    );
};

export default Cart;