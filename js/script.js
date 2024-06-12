
let hearts = document.querySelectorAll(".fa-heart")
let bag = document.querySelector(".fa-bag-shopping")
let whatsappBtn = document.querySelector(".fa-whatsapp")

const addToFavorites = () => {
    // toggle red heart
    let heart = event.target
    heart.classList.toggle(".red-heart-class")
    
}

hearts.forEach(heart => {
    heart.addEventListener('click', addToFavorites)
})


// whatsappBtn.addEventListener('click', function() {

// })

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