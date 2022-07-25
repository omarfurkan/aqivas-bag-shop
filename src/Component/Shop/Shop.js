import React, { useEffect, useState } from 'react';
import Bag from '../Bag/Bag';
import Cart from '../Cart/Cart';
import './Shop.css'
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');




const Shop = () => {
    const [bags, setBags] = useState([]);
    const [selectedItem, setSelectedItem] = useState([])
    const [chooseOne, setChooseOne] = useState({});
    const [modalOpen, setmodalOpen] = useState(false);

    useEffect(() => {
        if (selectedItem.length >= 4) {
            setmodalOpen(true)
        }
    }, [selectedItem])

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setBags(data))
    }, []);

    const handleCart = (product) => {
        let newItem = []
        const exist = selectedItem.find(findItem => findItem.id == product.id)

        if (!exist && selectedItem.length < 4) {
            newItem = [...selectedItem, product];
            setSelectedItem(newItem)
        }
        else {
            window.alert('cant select same item twice')
        }

    }

    const handleRandomOne = () => {
        const randomItem = selectedItem[Math.floor(Math.random() * selectedItem.length)];
        setChooseOne(randomItem)
    }

    const handleRemove = () => {
        setSelectedItem([]);
        setChooseOne({})
    }

    const handleDelete = (item) => {
        const deleted = selectedItem.filter(selectedOne => (selectedOne.id !== item.id));
        setSelectedItem(deleted)

    }



    return (
        <>
            <div className='shop-container'>
                <div className='product-container'>
                    <p>product</p>
                    <p>{bags.length}</p>

                    <div className='bags'>
                        {bags.map(bag => <Bag
                            key={bag.id}
                            bag={bag}
                            handleCart={handleCart}
                        />)}
                    </div>

                </div>

                <div className='cart-contaier'>
                    <div className='position-cart'>
                        <p>Choosen for you  <span className='choose-text'>{chooseOne.name} </span> </p>

                        <p>product Selected:{selectedItem.length} </p>
                        <div className='selected-itam'>
                            {selectedItem.map(item => <Cart
                                key={item.id}
                                item={item}
                                handleDelete={handleDelete}
                            />)}
                        </div>
                        <div className='choose-btn'>
                            <button onClick={handleRandomOne} disabled={selectedItem.length < 2}>Choose 1 for me</button>
                            <button onClick={handleRemove} disabled={selectedItem.length < 1}>Remove All</button>
                        </div>
                    </div>
                </div>

            </div>
            <Modal
                isOpen={modalOpen}

                // onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h3>Can't add more than 4 product</h3>
                <button onClick={() => setmodalOpen(false)}>x</button>
            </Modal>
        </>
    );
};

export default Shop;