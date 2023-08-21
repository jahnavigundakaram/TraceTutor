const bookSessionButton = document.querySelector('.book-session-button');
const sessionModal = document.getElementById('sessionModal');
const closeModal = document.getElementById('closeModal');
const sessionForm = document.getElementById('sessionForm');

bookSessionButton.addEventListener('click', () => {
    sessionModal.style.display = 'flex'; // Change display value
});

closeModal.addEventListener('click', () => {
    sessionModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === sessionModal) {
        sessionModal.style.display = 'none';
    }
});

sessionForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Implement session booking logic here
    sessionModal.style.display = 'none';
});
