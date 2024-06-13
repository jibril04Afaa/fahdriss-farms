
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

// Toggle burger menu
let burgerMenu = document.querySelector(".fa-bars")
function toggleMenu() {
    let links = document.querySelector(".links")
    console.log(links.style.display)
    if (links.style.display === 'block') {
        links.style.display = 'none'
    } else {
        links.style.display == 'block'
    }



}

burgerMenu.addEventListener('click', toggleMenu)




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