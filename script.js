document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('checkbox').checked;

    alert(`Logged in as ${username}`);

    if (rememberMe) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }

    checkExistingUser();
});

function checkExistingUser() {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
        document.getElementById('existing').style.display = 'block';
    }
}

document.getElementById('existing').addEventListener('click', function() {
    const savedUsername = localStorage.getItem('username');
    alert(`Logged in as ${savedUsername}`);
});

// Check for existing credentials on page load
window.onload = function() {
    checkExistingUser();
};