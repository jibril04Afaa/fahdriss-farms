
let heart = document.querySelector(".fa-heart")
let bag = document.querySelector(".fa-bag-shopping")

const addToFavorites = () => {
    // toggle red heart
    if (heart.classList.contains(".red-heart-class")) {
        heart.classList.remove(".red-heart-class")
        alert("Removed from favourites")
    } else {
        heart.classList.add(".red-heart-class")
        alert("Added to favourites!")
    }
    
}

heart.addEventListener('click', addToFavorites)


const addToCart = () => {
    alert("Added to cart!")

}

bag.addEventListener('click', addToCart)