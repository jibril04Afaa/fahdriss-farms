let price = document.querySelector(".amount-price")
let reduceQty = document.querySelector(".reduce")
let increaseQty = document.querySelector(".increase")
let quantity = document.querySelector(".product-quantity")



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

// from catalog.html
//let bags = document.querySelectorAll(".fa-bag-shopping")

// parent is basket div from cart.html
let cartProductParent = document.querySelector(".basket")

// populate basket/bag with items that have the bag color to be black
let appendedProduct = document.createElement("div")

// add appendedProduct as a child of product parents from cart.html
cartProductParent.appendChild(appendedProduct)
// add styles from cart.scss
appendedProduct.classList.add("basket")

function displayBag() {
    // if added to cart is true, populate cart with product
    if (bags.style.color === '#898E4C') {
        // populate cart.html
        console.log(appendedProduct)

    }
}

displayBag()

function calculateSubtotal() {

}

function calculateTotal() {

}


function checkout() {

}