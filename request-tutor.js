const requestForm = document.querySelector('.request-form form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');

requestForm.addEventListener('submit', (event) => {
    if (!validateForm()) {
        event.preventDefault();
    }
});

function validateForm() {
    let isValid = true;

    if (nameInput.value.trim() === '') {
        isValid = false;
        setErrorFor(nameInput, 'Name is required');
    } else {
        setSuccessFor(nameInput);
    }

    if (emailInput.value.trim() === '') {
        isValid = false;
        setErrorFor(emailInput, 'Email is required');
    } else if (!isEmailValid(emailInput.value)) {
        isValid = false;
        setErrorFor(emailInput, 'Invalid email format');
    } else {
        setSuccessFor(emailInput);
    }

    if (subjectInput.value.trim() === '') {
        isValid = false;
        setErrorFor(subjectInput, 'Subject is required');
    } else {
        setSuccessFor(subjectInput);
    }

    if (messageInput.value.trim() === '') {
        isValid = false;
        setErrorFor(messageInput, 'Message is required');
    } else {
        setSuccessFor(messageInput);
    }

    return isValid;
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const errorMessage = formControl.querySelector('.error-message');
    formControl.className = 'form-control error';
    errorMessage.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmailValid(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
