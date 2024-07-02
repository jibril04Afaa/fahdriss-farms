
let learnMoreBtns = document.querySelectorAll(".learn-more-btn")
let hearts = document.querySelectorAll(".fa-heart")
let productInfo = document.querySelector(".product-info")
let productDescs = document.querySelectorAll(".product-desc")
let body = document.querySelector("body")
let bags = document.querySelectorAll(".fa-bag-shopping")



let productCardParent = document.querySelector(".products-container")
let OGProductCard = document.querySelector(".product-card")

// TODO: Change function to fetch from MongoDB database
const API_URL = "http://localhost:3000/products"


async function fetchfromDB() {
    try {
        const response = await fetch(API_URL)
        const parsedData = await response.json()
        
        if (!response.ok) {
            console.log("BIG ASS ERROR!!")
        }

        parsedData.forEach(data => {
            // create new product card
            let productCard = document.createElement('div')
            

            // dynamically populate data to the product cards
            productCard.innerHTML = 
            `
            <div class="product-card" class="${data.category}">

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

// toggle red heart




hearts.forEach(heart => {
    heart.addEventListener('click', function() {
        if (heart.style.color != 'red') {
            heart.style.color = 'red'
        } else {
            heart.style.color = 'black'
        }
        
    })
})

// toggle cart item
// productCardParent.addEventListener('click', function(event) {
//     if (event.target.style.color != '#898E4C') {
//         event.target.style.color = '#898E4C'
//     } else {
//         event.target.style.color = 'black'
//     }
// })


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
