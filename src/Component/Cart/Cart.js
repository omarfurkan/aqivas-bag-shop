import React from 'react';
import './Cart.css'
import { AiFillDelete } from "react-icons/ai";
const Cart = ({ item, handleDelete }) => {
    return (
        <div className='carts'>
            <img src={item.img} alt="" />
            <h4>{item.name}</h4>
            <div className='delete-btn'>
                <button onClick={() => handleDelete(item)}><AiFillDelete className='icon' /></button>
            </div>
        </div>
    );
};

export default Cart;