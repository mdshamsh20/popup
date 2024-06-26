document.addEventListener('DOMContentLoaded', (event) => {
    const popup = document.getElementById('popup');
    const closeBt1n = document.getElementById('closeBt1n');

    // Show the popup when the page is loaded
    popup.style.display = 'flex';

    // Auto-close after 30 seconds
    setTimeout(() => {
        popup.style.display = 'none';
    }, 30000);

    // Close the popup when the close button is clicked
    closeBt1n.addEventListener('click', () => {
        popup.style.display = 'none';
    });
});