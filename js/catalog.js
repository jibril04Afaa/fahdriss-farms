
let learnMoreBtns = document.querySelectorAll(".learn-more-btn")
let hearts = document.querySelectorAll(".fa-heart")
let productInfo = document.querySelector(".product-info")
let productDescs = document.querySelectorAll(".product-desc")
let body = document.querySelector("body")
let bags = document.querySelectorAll(".fa-bag-shopping")

learnMoreBtns.forEach(learnMoreBtn => {
    learnMoreBtn.addEventListener('click', function() {
        // toggle product descriptions
        productDescs.forEach(productDesc => {
            if (productDesc.style.display === 'none') {
                productDesc.style.display = 'block'
            } else {
                productDesc.style.display = 'none'
                learnMoreBtn.textContent = 'Show Less'
            }
            
        })
    })
    
})


// toggle red heart
hearts.forEach(heart => {
    heart.addEventListener('click', function() {
        if (heart.style.color === '') {
            heart.style.color = 'red'
            setTimeout(() => {
                alert("Added to favorites! ")
            }, 100)
            
            // add selected item to favorites

        } else {
            heart.style.color = ''
            setTimeout(() => {
                alert("Removed from favorites ")
            }, 100)
            // remove selected item from favorites
        }
    })
})




// toggle cart item
bags.forEach(bag => {
    bag.addEventListener('click', function() {
        
        if (bag.style.color === 'black') {
            bag.style.color = '#898E4C'
            setTimeout(() => {
                alert("Item added to bag")
            }, 100)
            
        } else {
            bag.style.color = 'black'
            setTimeout(() => {
                alert("Item removed from bag")
            }, 100)
        }
    })
})


let productCardParent = document.querySelector(".products-container")
let OGProductCard = document.querySelector(".product-card")

// fetch JSON data to populate product cards
async function fetchJSONandPopulate() {
    try {
        const response = await fetch("products.json")
        const parsedData = await response.json()
        
        parsedData.forEach(data => {
            let IDs = data.id
            // let productName = data.name
            // let prices = data.prices
            // let images = data.image
            // let categories = data.category
            // let widths = data.width
            // let heights = data.height

            // create new product card
            let productCard = document.createElement('div')

            let icons = document.createElement('div')
            let productImage = document.createElement('div')
            let productInfo = document.createElement('div')

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

fetchJSONandPopulate()


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
