
let hearts = document.querySelectorAll("#other-hearts")
let bags = document.querySelectorAll(".fa-bag-shopping")
let whatsappBtn = document.querySelector(".fa-whatsapp")
let navHeart = document.querySelector("#nav-heart")


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

// toggle cart item color

bags.forEach(bag => {
    bag.addEventListener('click', function() {
        if (bag.style.color === '') {
            bag.style.color = '#898E4C'
            setTimeout(() => {
                alert("Added to cart! ")
            }, 100)
            
        } else {
            bag.style.color = ''
            setTimeout(() => { 
                alert("Removed from cart! ")
            }, 100)
        }
    })
})





// Navbar functionality
let searchContainer = document.querySelector(".search-container")
let searchBtn = document.querySelector(".fa-search")
let user = document.querySelector("fa-user")

searchBtn.addEventListener('click', function() {
    // bring up search bar
    let searchBar = document.createElement('input')
    searchContainer.appendChild(searchBar)
    searchBar.classList.add("search-bar")
    searchBar.placeholder = "Search for products..."


    // implement searching algorithm to search for products in catalog.html
    
})

// user.addEventListener('click', function() {
//     // display user page with order history
// })


