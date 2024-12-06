document.getElementById('learn-more-btn').addEventListener('click', () => {
    alert('Thanks for your interest! Scroll down to learn more.');
});

document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    alert(`Thank you, ${name}! Your message: "${message}" has been received.`);
});
