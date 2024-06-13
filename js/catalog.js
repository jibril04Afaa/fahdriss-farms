
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

let favorites = []


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


// let shoppingBag = document.querySelector("")

// populate basket/bag with items that have the bag color to be black
function displayBag() {

}

// toggle cart item
bags.forEach(bag => {
    bag.addEventListener('click', function() {
        console.log()
        if (bag.style.color != 'black') {
            bag.style.color = 'black'
            setTimeout(() => {
                alert("Added to bag! ")
                
            }, 100)
            
        } else {
            bag.style.color = 'white'
            setTimeout(() => {
                alert("Removed to bag")
            }, 100)
        }
    })
})



// list titles
let spices = document.querySelector(".spices")
let milletAndPorridges = document.querySelector(".millet")
let healthSupplements = document.querySelector(".health")

let productsContainer = document.querySelector(".products-container")
let spiceProducts = document.querySelectorAll(".spice")
let milletProducts = document.querySelectorAll(".Millet")
let health = document.querySelectorAll(".health")

// let HTMLspices = []
// let HTMLmillets = []
// let HTMLhealths = []


spices.addEventListener('click', function() {
    // show all items with the class of 'spices'

    // empty products container
    productsContainer.textContent = ''
    
    spiceProducts.forEach(spiceProduct => {
        productsContainer.textContent = spiceProduct.textContent
    })

    
})

// millet.addEventListener('click', function() {
//     // show all items with the class of 'millet'
// })

// health.addEventListener('click', function() {
//     // show all items with the class of 'health'
//     let healthItems = document.querySelectorAll('.health')
//     healthItems.forEach(healthItem => {
//         // show each health item
//     })
// })




// sorting
let sortByPrice = document.querySelector()
let sortByPopularity = document.querySelector()
let sortByHealthiest = document.querySelector()





// sortByPrice.addEventListener('click', function() {
//     // sort products by price

// })