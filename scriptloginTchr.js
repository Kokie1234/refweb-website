document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    document.getElementById('loginError').textContent = '';

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    let teachers = JSON.parse(localStorage.getItem('teachers')) || [];

    const user = teachers.find(user => user.email === email);

    if (user && user.password === password) {
        alert('Login successful!');
        window.location.href = 'tracker.html';
    } else {
        document.getElementById('loginError').textContent = 'Invalid email or password';
    }
});