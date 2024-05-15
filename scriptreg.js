document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    document.getElementById('registerError').textContent = '';

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        document.getElementById('registerError').textContent = 'Passwords do not match!';
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find(user => user.email === email)) {
        document.getElementById('registerError').textContent = 'User with this email already exists!';
        return;
    }

    const user = {
        username: username,
        email: email,
        password: password
    };

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    window.location.href = 'login.html';
});