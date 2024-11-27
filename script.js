// Mock user database
const users = {
    user1: { password: "password1", redirect: "user1.html" },
    user2: { password: "password2", redirect: "user2.html" },
};

// Handle form submission
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if the username exists and the password matches
    if (users[username] && users[username].password === password) {
        // Redirect to the user's page
        window.location.href = users[username].redirect;
    } else {
        // Show an error message
        document.getElementById("errorMessage").innerText = "Invalid username or password.";
    }
});
