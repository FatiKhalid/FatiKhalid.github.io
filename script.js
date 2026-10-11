// Smooth scrolling for navigation links with subtle click animation feedback
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Interactive dynamic greeting in the console & smooth page load effect
window.addEventListener('load', () => {
    console.log("Welcome to Fatima Khalid's Portfolio website!");
});
