
let learnMoreBtns = document.querySelectorAll(".learn-more-btn")
let hearts = document.querySelectorAll(".fa-heart")
let productInfo = document.querySelector(".product-info")
let productDescs = document.querySelectorAll(".product-desc")



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

// sorting
let 
