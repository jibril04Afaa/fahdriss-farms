
let hearts = document.querySelectorAll(".fa-heart")
let bag = document.querySelector(".fa-bag-shopping")

const addToFavorites = () => {
    // toggle red heart
    let heart = event.target
    heart.classList.toggle(".red-heart-class")
    
}

hearts.forEach(heart => {
    heart.addEventListener('click', addToFavorites)
})


const addToCart = () => {
    alert("Added to cart!")

}

bag.addEventListener('click', addToCart)