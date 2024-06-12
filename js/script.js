
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


const addToCart = () => {
    alert("Added to cart!")
}

bag.addEventListener('click', addToCart)


whatsappBtn.addEventListener('click', function() {
    alert(`Whatsapp : +233 246432295 + ${<br></br>} + Calls : +233 246432295 and +233 201133903 ` + <br></br>)
})