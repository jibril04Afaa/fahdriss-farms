let price = document.querySelector(".amount-price")
let reduceQty = document.querySelector(".reduce")
let increaseQty = document.querySelector(".increase")
let quantity = document.querySelector(".product-quantity")
let basketContainer = document.querySelector(".basket")
let totalsContainer = document.querySelector(".total")
let clearCartbtn = document.querySelector(".clear-cart-btn")
// let productCardParent = document.createElement('div')


// parent
let basket = document.querySelector(".basket")

// if there are no products in basket, display "basket empty text"
// if (basketContainer) {
//     basketContainer.textContent = 'Basket Empty!'
//     basketContainer.style.textAlign = 'center'
//     totalsContainer.textContent = ''
// }
// import { addToCart } from "./catalog.mjs"

const API_CART_URL_CART_JS = "http://localhost:3000/cart"
const API_PRODUCT_URL_CART_JS = "http://localhost:3000/products"



async function fetchSelectedProduct() {

    try {
        const response = await fetch(API_PRODUCT_URL_CART_JS)
        
        if(!response.ok) {
            console.error(error)
        }

        const parsedData = await response.json()
        console.log(parsedData)

        parsedData.forEach(selectedProduct => {


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

// addToCart()
// get product id selected
fetchSelectedProduct()


clearCartbtn.addEventListener('click', function() {
    basketContainer.textContent = ''
    totalsContainer.textContent = ''

    // log an "empty basket" message

})


