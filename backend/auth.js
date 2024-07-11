

let loginBtn = document.querySelector(".login-btn")
let createAccBtn = document.querySelector(".create-account-btn")

let password = document.querySelector(".password-field")
let emailField = document.querySelector(".email-field")



let loggedIn = false

async function loadAdminPage() {
    try {
        const response = await fetch("admin.html")
        const loadedPage = await page.text()
        
        if (response.ok) {
            // redirect to admin page
            window.location.href = "admin.html"
        }

    } catch (error) {
        console.error(error)
    }

}

// admin auth

loginBtn.addEventListener('click', function() {

    if (emailField.value === 'admin' && password.value === 'adminPass') {
        loadAdminPage()
    }
} )


function login() {
    
}

let accountCreated = false
function createAccount() {

}

loginBtn.addEventListener('click', login)
createAccBtn.addEventListener('click', createAccount)


// module.exports = {
//     login,
//     createAccount
// }