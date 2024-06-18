
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

// populate basket/bag with items that have the bag color to be black

function displayBag() {
    alert("bag is shown")
}


// toggle cart item
bags.forEach(bag => {
    bag.addEventListener('click', function() {
        console.log()
        if (bag.style.color != 'black') {
            bag.style.color = 'black'
            setTimeout(() => {
                alert("Added to bag! ")
                displayBag()
            }, 100)
            
        } else {
            bag.style.color = 'white'
            setTimeout(() => {
                alert("Removed from bag")
            }, 100)
        }
    })
})


// mobile options
const selectElement = document.querySelector(".select-sorting")

const spices = document.querySelector(".spices")
let milletAndPorridges = document.querySelectorAll(".millet")
let healthSupplements = document.querySelectorAll(".health")

selectElement.addEventListener('change', function(event) {
    const selected = event.target.value
    if (selected === spices.textContent) {
        console.log("spices selected")
    }
})
