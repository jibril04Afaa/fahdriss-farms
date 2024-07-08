let price = document.querySelector(".amount-price")
let reduceQty = document.querySelector(".reduce")
let increaseQty = document.querySelector(".increase")
let quantity = document.querySelector(".product-quantity")
let basketContainer = document.querySelector(".basket")
let totalsContainer = document.querySelector(".total")

// if there are no products in basket, display "basket empty text"
// if (basketContainer) {
//     basketContainer.textContent = 'Basket Empty!'
//     basketContainer.style.textAlign = 'center'
//     totalsContainer.textContent = ''
// }

const API_URL = "http://localhost:3000/cart"

// sends GET request to backend 
// async function addToCart() {
//     try {
//         const response = await fetch(API_URL)
//         const data = response.json()

        
        
//     } catch (error) {
//         console.error(error)
//     }
// }

// addToCart()

// async function fetchProducts() {
//     try {
//         const response = await fetch(API_URL)
//         const cartProducts = response.json()
        
//     } catch (error) {
//         console.error(error)
//     }
// }

// fetchProducts()

// async function displayCustomerProducts() {
//     try {
        
//     } catch (error) {
//         console.error(error)
//     }
// }

// async function removeItem() {
//     try {
//         const response = await fetch(API_URL, {
//             method: 'DELETE'
//         })
//     } catch (error) {
//         console.error(error)
//     }
// }

let counter = 0
reduceQty.addEventListener('click', () => {
    counter -= 1
    quantity.textContent = counter

    // TODO: FIX COUNTER
    if (counter < 1) {
        alert("Cannot have less than 0 items in cart! ")
        counter = 0
    }
})

increaseQty.addEventListener('click', () => {
    counter += 1
    quantity.textContent = counter
})

// // parent is basket div from cart.html
// let cartProductParent = document.querySelector(".basket")

// // populate basket/bag with items that have the bag color to be black
// let appendedProduct = document.createElement("div")

// // add appendedProduct as a child of product parents from cart.html
// cartProductParent.appendChild(appendedProduct)
// // add styles from cart.scss
// appendedProduct.classList.add("basket")
