let price = document.querySelector(".amount-price")
let reduceQty = document.querySelector(".reduce")
let increaseQty = document.querySelector(".increase")
let quantity = document.querySelector(".product-quantity")
let basketContainer = document.querySelector(".basket")
let totalsContainer = document.querySelector(".total")
let clearCartbtn = document.querySelector(".clear-cart-btn")

// parent
let basket = document.querySelector(".basket")

// if there are no products in basket, display "basket empty text"
// if (basketContainer) {
//     basketContainer.textContent = 'Basket Empty!'
//     basketContainer.style.textAlign = 'center'
//     totalsContainer.textContent = ''
// }

const API_CART_URL = "http://localhost:3000/cart"
const API_PRODUCT_URL = "http://localhost:3000/products"


async function fetchSelectedProduct() {
    const productID = localStorage.getItem("selectedProductID")
    console.log(productID)

    try {
        const response = await fetch(`${API_PRODUCT_URL}`)
        
        if(!response.ok) {
            console.error(error)
        }

        const parsedData = await response.json()
        console.log(parsedData)

        parsedData.forEach(selectedProduct => {
        // dynamically update html in cart.html with selected product
        // if (product is selected): render html code for selected product

        let newAddedProduct = document.createElement('div')
        newAddedProduct.innerHTML = 

        `<div class="basket-container">
            <div class="product-image">
                <img src = ${selectedProduct.image} width = ${selectedProduct.width} height = ${selectedProduct.height}>
            </div>
        </div>

        <div class="name">
            <h5>Name</h5>
            <h5 class="product-name">${selectedProduct.name}</h5>
        </div>
        
        <div class="quantity">
            <h5 class="amount-quantity">Quantity</h5>
            <div class="quantity-details">
                <button class="reduce">-</button>
                <h5 class="product-quantity">0</h5>
                <button class="increase">+</button>
            </div>
        </div>

        <div class="price">
            <h5 class="amount-price">Price</h5>
            <h5 class="product-price">${selectedProduct.prices}</h5>
        </div>

        `
        basket.appendChild(newAddedProduct)
        newAddedProduct.classList.add("basket-container")
        })
        
    } catch (error) {
        console.error(error)
    }
}

// get product id selected
fetchSelectedProduct()

clearCartbtn.addEventListener('click', function() {
    basketContainer.textContent = ''
    totalsContainer.textContent = ''

    // log an "empty basket" message

})

// let counter = 0
// reduceQty.addEventListener('click', () => {
//     counter -= 1
//     quantity.textContent = counter

//     // TODO: FIX COUNTER
//     if (counter < 1) {
//         alert("Cannot have less than 0 items in cart! ")
//         counter = 0
//     }
// })

// increaseQty.addEventListener('click', () => {
//     counter += 1
//     quantity.textContent = counter
// })

// // parent is basket div from cart.html
// let cartProductParent = document.querySelector(".basket")

// // populate basket/bag with items that have the bag color to be black
// let appendedProduct = document.createElement("div")

// // add appendedProduct as a child of product parents from cart.html
// cartProductParent.appendChild(appendedProduct)
// // add styles from cart.scss
// appendedProduct.classList.add("basket")
