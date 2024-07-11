let bags = document.querySelectorAll(".fa-bag-shopping")
let productCardParent = document.querySelector(".products-container")
let productInfo = document.querySelector(".product-info")
const selectElement = document.querySelector('.drop_select')
//let productCard;




let OGProductCard = document.querySelector(".product-card")


const API_PRODUCT_URL = "http://localhost:3000/products"
const API_CART_URL = "http://localhost:3000/cart"

// change function to dynamically get productID
async function addToCart() {
    // console.log("Adding something to the cart..")
    try {
        const response = await fetch(API_CART_URL, {
            // method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify({
            //     id: "product ID"
            // })
            
        })

        if (!response.ok) {
            console.log("ERROR!")
        }
        
        const data = await response.json()


        // grab the id from the bag that has been clicked
        bags.forEach(bagClicked => {
            // get the id of the bag clicked
            let newBagWithParent = productCardParent.appendChild(bagClicked)
            let clickedBagParent = newBagWithParent.parentNode

            if (clickedBagParent.style.color === '#898E4C') {
                console.log("Selected")
            } else {
                console.log("not clicked")
            }
            console.log(clickedBagParent)
            
        })

        

    } catch (error) {
        console.error(error)
    }
}


console.log(productCardParent)

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
            let productID = data.id

            // dynamically populate data to the product cards
            productCard.innerHTML = 
            `

            <div class="product-card" class="${data.category}" id="${productID}" onClick="addToCart()">

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
            addToCart()
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


fetchfromDB()


// mobile options

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




