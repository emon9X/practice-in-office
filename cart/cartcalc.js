const addToCart = () => {
    const productName = document.getElementById('product-name');
    const name = productName.value;
    const productQuantity = document.getElementById('product-quantity');
    const quantity = productQuantity.value;
    productName.value = '';
    productQuantity.value = '';
    // console.log(name, quantity);
    displayCart(name, quantity);
    saveToLocalStorage(name, quantity);
}

const displayCart = (name, quantity) => {
    const cartContainer = document.getElementById('cart-container');
    const li = document.createElement('li');
    li.innerText = `${name} : ${quantity}`;
    cartContainer.appendChild(li)
}

const getFromLocaltStorage = () => {
    const previouslySavedData = localStorage.getItem('cart');
    // console.log(prviouslySavedData);
    let blankCart = {};
    if(previouslySavedData) {
         blankCart = JSON.parse(previouslySavedData);
    }
    return blankCart;
}

const saveToLocalStorage = (name, quantity) => {
    const cart = getFromLocaltStorage();
    cart[name] = quantity;
    const cartString = JSON.stringify(cart);
    localStorage.setItem('cart', cartString);
}
console.log(getFromLocaltStorage())

const displaySavedCart = () => {
    const cart = getFromLocaltStorage();
    for(const item in cart) {
        quantity = cart[item];
        console.log(item, quantity);
        displayCart(item, quantity);
    }
}

displaySavedCart()

