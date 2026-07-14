document.getElementById("registerBtn").addEventListener("click", function() {
    document.getElementById("registrationForm").style.display = "block";
});

function register() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;

    if(username && password && email) {
        alert("Registration Successful!");
    } else {
        alert("Please fill in all fields.");
    }
}
