
let learnMoreBtns = document.querySelectorAll(".learn-more-btn")
let productInfo = document.querySelector(".product-info")
let productDescs = document.querySelectorAll(".product-desc")
let body = document.querySelector("body")



let productCardParent = document.querySelector(".products-container")
let OGProductCard = document.querySelector(".product-card")


const API_PRODUCT_URL = "http://localhost:3000/products"
const API_CART_URL = "http://localhost:3000/cart"






// fetch product data from database and populate catalog.html
async function fetchfromDB() {
    try {
        const response = await fetch(API_PRODUCT_URL)
        const parsedData = await response.json()

        if (!response.ok) {
            console.error(error)
        }

        parsedData.forEach(data => {
            // create new product card
            let productCard = document.createElement('div')
            

            // dynamically populate data to the product cards
            productCard.innerHTML = 
            `

            <div class="product-card" class="${data.category}" id="" onClick="addToCart()">

            <div class="icons">
                <!-- heart icon-->
                <i class="fa fa-heart" aria-hidden="true"></i>
                <!-- shopping bag-->
                <i class="fa-solid fa-bag-shopping"></i>
            </div>

            <div class="product-image">
                <img src = "${data.image}" width = "${data.width}" height = "${data.height}">
            </div>

            <div class="product-info">
                <h5 class="price">${data.prices}</h5>
                <h5 class="product-name">${data.name}</h5>
            </div>
        </div>

            `

            // add product card styling
            productCard.classList.add("product-card")

            // give product card a parent
            productCardParent.appendChild(productCard)
            
        })

    } catch (error) {
        console.error(error)
    }

}

fetchfromDB()


async function addToCart(productID) {
    //console.log("Adding something to the cart..")
    try {
        const response = await fetch(API_CART_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: productID
            })
            
        })

        if (!response.ok) {
            console.log("ERROR!")
        }
        
        const data = await response.json()
        console.log(data)
        
        // store selected product id in local storage
        localStorage.setItem('selectedProductID', productID)

    } catch (error) {
        console.error(error)
    }
}

// used event delegation to add listener to dynamic html fetched from the database
productCardParent.addEventListener('click', function(event) {
    let target = event.target
        
    // toggle red heart
    if (target.classList.contains("fa-heart")) {
        if (target.style.color != "red") {
            target.style.color = "red"
            setTimeout(() => {
                alert("Added to favorites! ")
            }, 100)
        } else {
            target.style.color = "white"
            setTimeout(() => {
                alert("Removed from favorites! ")
            }, 100)
        }
    }

    // toggle cart item color
    if (target.classList.contains("fa-bag-shopping")) {
        if (target.style.color != "#898E4C") {
            target.style.color = "#898E4C"
            setTimeout(() => {
                alert("Added to cart! ")
            }, 100)
        } else {
            // TODO: fix why the cart is not going back to white
            target.style.color = "white"
            setTimeout(() => {
                alert("Removed from cart! ")
            }, 100)
        }
    }
})









// code from stack overflow user Mervis Mascarenhas
// mobile options
// const selectElement = document.getElementsByName('drop_select')[0];

// let spices = document.querySelectorAll(".spice")
// let milletAndPorridges = document.querySelectorAll(".Millet")
// let healthSupplements = document.querySelectorAll(".health")


// selectElement.addEventListener('change', function(event) {
//     const selectedValue = event.target.value
//     if (selectedValue === 'sort-by-spices') {
//         // display spices
//     }

//     if (selectedValue === 'sort-by-millet') {
//         // display spices
//         console.log(milletAndPorridges)
//         // milletAndPorridges.forEach(millet => {
//         //     console.log(millet)
//         // })
//     }


// })
