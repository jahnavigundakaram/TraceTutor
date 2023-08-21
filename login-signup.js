const loginTab = document.getElementById('loginTab');
const signupTab = document.getElementById('signupTab');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

function openTab(tabName) {
    if (tabName === 'login') {
        loginTab.classList.add('active');
        signupTab.classList.remove('active');
    } else if (tabName === 'signup') {
        signupTab.classList.add('active');
        loginTab.classList.remove('active');
    }
}

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Handle login form submission
    showAlert('Login successful!', 'success');
});

signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Handle signup form submission
    showAlert('Sign up successful!', 'success');
});

function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert ${type}`;
    alertDiv.appendChild(document.createTextNode(message));

    const authSection = document.querySelector('.auth-section');
    authSection.insertBefore(alertDiv, authSection.firstChild);

    setTimeout(() => {
        alertDiv.remove();
    }, 3000);
}
