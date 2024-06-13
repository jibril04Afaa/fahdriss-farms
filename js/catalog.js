
let learnMoreBtns = document.querySelectorAll(".learn-more-btn")
let hearts = document.querySelectorAll(".fa-heart")
let productInfo = document.querySelector(".product-info")
let productDescs = document.querySelectorAll(".product-desc")
let body = document.querySelector("body")

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