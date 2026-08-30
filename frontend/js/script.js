console.log("BugBoard JavaScript loaded");

const loginForm = document.getElementById("loginForm")
console.log(loginForm)

loginForm.addEventListener("submit",function(event){
    event.preventDefault();
    
    const usernameInput = document.getElementById("username")
    
    console.log(`Username: ${usernameInput.value}`);
    console.log("Password: Password received");
    
    console.log("Login form submitted")
    });




















