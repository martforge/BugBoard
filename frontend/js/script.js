console.log("BugBoard JavaScript loaded");

const loginForm = document.getElementById("loginForm");
console.log(loginForm)
//Login
if (loginForm){
    loginForm.addEventListener("submit",function(event){
    event.preventDefault();

    const loginMessage = document.getElementById("loginMessage");
    loginMessage.textContent = "";
    const usernameInput = document.getElementById("username")
        if (usernameInput.value === "") {
            loginMessage.textContent = "Username is required";
            return
        }
        else {loginMessage.textContent = "Username accepted";
        }
    const savedUsername = localStorage.getItem("username");
    console.log(savedUsername);
    if (savedUsername !== usernameInput.value ) {
    console.log("Username does not match")
    return;
    }

    //password
    const passwordInput = document.getElementById("password");
        if (passwordInput.value === "") {
            loginMessage.textContent = "Password is required";
            return;
        }

        else {loginMessage.textContent = "Password accepted";
        }
    loginMessage.textContent = "Login successful";
    console.log("Login form submitted")
    });
}

// Register
const registerForm = document.getElementById("registerForm");
// Register Validation
if (registerForm){
    registerForm.addEventListener("submit", function(event){
    event.preventDefault();
    const registerMessage = document.getElementById("registerMessage");
    registerMessage.textContent = "";
        // Username
        const usernameInput = document.getElementById("username");
        if (usernameInput.value === ""){
            registerMessage.textContent = "Username is required"
            return;
        }

        //Email
        const emailInput = document.getElementById("email");
        if (emailInput.value === ""){
            registerMessage.textContent = "Email is required";
            return;
        }
        // Password
        const passwordInput = document.getElementById("password");
        if (passwordInput.value === ""){
            registerMessage.textContent = "Password is required";
            return;
        }
        registerMessage.textContent = "Registration successful";
        console.log("Registration successful");
        localStorage.setItem("username", usernameInput.value);
        console.log(localStorage.getItem("username"));









    });
}

















