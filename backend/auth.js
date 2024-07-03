

let loginBtn = document.querySelector(".login-btn")
let createAccBtn = document.querySelector(".create-account-btn")

let password = document.querySelector(".password-field")
let emailField = document.querySelector(".email-field")



let loggedIn = false
function login() {
    
}

let accountCreated = false
function createAccount() {

}

loginBtn.addEventListener('click', login)
createAccBtn.addEventListener('click', createAccount)


module.exports = {
    login,
    createAccount
}