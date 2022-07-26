const getFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('shopping_cart'))
};

const addToLocalStorage = (id) => {
    const exist = getFromLocalStorage();
    let shoppingCart = {}

    if (!exist) {
        // shoppingCart.id = "1"; {this cant be dynami} or
        shoppingCart[id] = 1;
    }
    else {
        // shoppingCart = shoppingCart[id] = '1'; or
        shoppingCart = exist;

        if (shoppingCart[id]) {
            const newCount = shoppingCart[id] + 1;
            shoppingCart[id] = newCount;
        }
        else {
            shoppingCart[id] = 1;
        }
    }

    localStorage.setItem('shopping_cart', JSON.stringify(shoppingCart))
};


const clearAllLocalStorage = () => {
    localStorage.removeItem('shopping_cart')
}



export { addToLocalStorage, getFromLocalStorage, clearAllLocalStorage };