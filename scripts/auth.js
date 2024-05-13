import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";

const app = initializeApp(firebaseConfig);

var auth = firebase.auth();

const registerForm = document.querySelector('#registerUser');
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    var email = registerForm.getElementById('email').value;
    var password = registerform.getElementById('password').value;

    auth.createUserWithEmailAndPassword(email, password)
    .then(function(userCredential) {
        // Registration successful, redirect or show a success message
        document.getElementById('message').innerHTML = "Registration successful!";
    })
    .catch(function(error) {
        // Handle errors
        var errorMessage = error.message;
        document.getElementById('message').innerHTML = errorMessage;
    });
});