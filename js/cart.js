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

function calculateSubtotal() {

}

function calculateTotal() {

}


function checkout() {

}