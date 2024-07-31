const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Event listeners for the register and login buttons
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Event listeners for the social media icons
document.getElementById('google-icon').addEventListener('click', () => {
    window.location.href = 'https://www.google.com/';
});

document.getElementById('facebook-icon').addEventListener('click', () => {
    window.location.href = 'https://www.facebook.com/';
});

document.getElementById('github-icon').addEventListener('click', () => {
    window.location.href = 'https://github.com/';
});

document.getElementById('linkedin-icon').addEventListener('click', () => {
    window.location.href = 'https://www.linkedin.com/login/';
});

// Sign-in icons
document.getElementById('google-icon-signin').addEventListener('click', () => {
    window.location.href = 'https://www.google.com/';
});

document.getElementById('facebook-icon-signin').addEventListener('click', () => {
    window.location.href = 'https://www.facebook.com/';
});

document.getElementById('github-icon-signin').addEventListener('click', () => {
    window.location.href = 'https://github.com/';
});

document.getElementById('linkedin-icon-signin').addEventListener('click', () => {
    window.location.href = 'https://www.linkedin.com/login/';
});
