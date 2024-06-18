
let hearts = document.querySelectorAll(".fa-heart")
let bags = document.querySelector(".fa-bag-shopping")
let whatsappBtn = document.querySelector(".fa-whatsapp")

const addToFavorites = () => {
    // toggle red heart
    let heart = event.target
    heart.classList.toggle(".red-heart-class")
    
}

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
        if (bag.style.color === 'white') {
            bag.style.color = 'black'
            setTimeout(() => {
                alert("Added to bag! ")
                
            }, 100)
            
        } else {
            bag.style.color = 'white'
            setTimeout(() => {
                alert("Removed from bag")
            }, 100)
        }
    })
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