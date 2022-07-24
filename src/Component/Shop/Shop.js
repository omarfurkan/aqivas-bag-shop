import React, { useEffect, useState } from 'react';
import Bag from '../Bag/Bag';
import './Shop.css'

const Shop = () => {
    const [bags, setBags] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setBags(data))
    }, [])

    return (
        <div className='shop-container'>
            <div className='product-container'>
                <p>product</p>
                <p>{bags.length}</p>
                <div className='bags'>
                    {bags.map(bag => <Bag
                        key={bag.id}
                        bag={bag} />)}
                </div>

            </div>
            <div className='cart-contaier'>
                <p>cart</p>
            </div>
        </div>
    );
};

export default Shop;