import React, { useEffect, useState } from 'react';
import Bag from '../Bag/Bag';
import Cart from '../Cart/Cart';
import './Shop.css'

const Shop = () => {
    const [bags, setBags] = useState([]);
    const [selectedItem, setSelectedItem] = useState([])
    const [chooseOne, setChooseOne] = useState({});
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setBags(data))
    }, []);

    const handleCart = (product) => {
        // console.log(product);
        const newItem = [...selectedItem, product];
        setSelectedItem(newItem);

    }

    const handleRandomOne = () => {
        const randomItem = selectedItem[Math.floor(Math.random() * selectedItem.length)];
        setChooseOne(randomItem)
    }




    return (
        <div className='shop-container'>
            <div className='product-container'>
                <p>product</p>
                <p>{bags.length}</p>

                <div className='bags'>
                    {bags.map(bag => <Bag
                        key={bag.id}
                        bag={bag}
                        handleCart={handleCart} />)}
                </div>

            </div>
            <div className='cart-contaier'>

                <p>Choosen for you  <span className='choose-text'>{chooseOne.name} </span> </p>

                <p>product Selected:{selectedItem.length} </p>
                <div className='selected-itam'>
                    {selectedItem.map(item => <Cart
                        key={item.id}
                        item={item}
                    />)}
                </div>
                <div className='choose-btn'>
                    <button onClick={handleRandomOne}>Choose 1 for me</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;