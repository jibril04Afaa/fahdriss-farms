
let learnMoreBtns = document.querySelectorAll(".learn-more-btn")
let productInfo = document.querySelector(".product-info")
let productDescs = document.querySelectorAll(".product-desc")
let body = document.querySelector("body")
let productCard;



let productCardParent = document.querySelector(".products-container")
let OGProductCard = document.querySelector(".product-card")


const API_PRODUCT_URL = "http://localhost:3000/products"
const API_CART_URL = "http://localhost:3000/cart"

// change function to dynamically get productID
async function addToCart() {
    console.log("Adding something to the cart..")
    try {
        const response = await fetch(API_CART_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: "product ID"
            })
            
        })

        if (!response.ok) {
            console.log("ERROR!")
        }
        
        const data = await response.json()
        console.log(data)
        

    } catch (error) {
        console.error(error)
    }
}



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
            // addToCart()
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





// mobile options
const selectElement = document.querySelector('.drop_select')
// categories from database
const categories = ['spice', 'health', 'N/A', 'millet and porridge']

// event delegation for dynamic HTML fetched from database
selectElement.addEventListener('change', function(event) {
    let selectedValue = event.target.value
    //console.log(selectedValue)

    // get actual values from database
    async function getData() {
        try {
            const res = await fetch(API_PRODUCT_URL)
            const parsedRes = await res.json()
            
            // loop through json database
            parsedRes.forEach(prod => {
                const category = prod.category
                const name = prod.name
                const image = prod.image
                const width = prod.width
                const height = prod.height
                const prices = prod.prices

                // empty DOM
                

                // create new element to store sorted products
                let newSortedProduct = document.createElement('div')
                newSortedProduct.classList.add('product-card')
                newSortedProduct.classList.add(category)
                newSortedProduct.innerHTML = 

                `

                <div class="product-card" class="${category}" id="" onClick="addToCart()">
    
                <div class="icons">
                    <!-- heart icon-->
                    <i class="fa fa-heart" aria-hidden="true"></i>
                    <!-- shopping bag-->
                    <i class="fa-solid fa-bag-shopping"></i>
                </div>
    
                <div class="product-image">
                    <img src = "${image}" width = "${width}" height = "${height}">
                </div>
    
                <div class="product-info">
                    <h5 class="price">${prices}</h5>
                    <h5 class="product-name">${name}</h5>
                </div>
            </div>
    
                `

                // append product card to parent element if it matches selected category
                if (selectedValue === 'sort-by-spices' && category === 'spices') {
                    productCardParent.appendChild(newSortedProduct)
                }

                
            })
            
        } catch (error) {
            console.error(error)
        }
    }

    getData()

})

export { addToCart }