document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

  
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";

   
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let isValid = true;


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        isValid = false;
    }


    const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passwordPattern.test(password)) {
        document.getElementById("passwordError").textContent = 
            "Password must be at least 8 characters long, include at least one uppercase letter, and one special character.";
        isValid = false;
    }


    if (isValid) {
        alert("Login successful!");
        
    }
});
