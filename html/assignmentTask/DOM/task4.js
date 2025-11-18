let form = document.getElementById("myForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    let nameErr = document.getElementById("nameError");
    let emailErr = document.getElementById("emailError");
    let passErr = document.getElementById("passError");

    let valid = true;

    // Name check
    if (name.value.trim() === "") {
        nameErr.textContent = "Name is required";
        name.className = "invalid";
        valid = false;
    } else {
        nameErr.textContent = "";
        name.className = "valid";
    }

    // Email check
    if (email.value.indexOf("@") === -1) {
        emailErr.textContent = "Email must contain '@'";
        email.className = "invalid";
        valid = false;
    } else {
        emailErr.textContent = "";
        email.className = "valid";
    }

    // Password check
    if (password.value.length < 8) {
        passErr.textContent = "Password must be at least 8 characters";
        password.className = "invalid";
        valid = false;
    } else {
        passErr.textContent = "";
        password.className = "valid";
    }

    if (valid) {
        alert("Form submitted successfully!");
    }
});
