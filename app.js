document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        }
    });
});

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
            this.classList.add('active');
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        }
    });
});

document.querySelectorAll('section').forEach(section => {
    section.addEventListener('mouseenter', () => {
        section.style.backgroundColor = '#f0f8ff';
        section.style.transition = 'background-color 0.3s ease';
    });

    section.addEventListener('mouseleave', () => {
        section.style.backgroundColor = '';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('footer p');
    const quotes = [
        "Education is the passport to the future.",
        "Learning never exhausts the mind.",
        "Knowledge is power.",
        "Education is the key to unlocking the world.",
        "The beautiful thing about learning is that nobody can take it away from you."
    ];

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    footer.innerHTML = `
        &copy; ${new Date().getFullYear()} Quality Education Project | All Rights Reserved
        <br>
        <em>${randomQuote}</em>
    `;
});

const backToTopButton = document.createElement('button');
backToTopButton.innerText = "Back to Top";
backToTopButton.style.position = "fixed";
backToTopButton.style.bottom = "20px";
backToTopButton.style.right = "20px";
backToTopButton.style.padding = "10px 15px";
backToTopButton.style.backgroundColor = "#4CAF50";
backToTopButton.style.color = "white";
backToTopButton.style.border = "none";
backToTopButton.style.borderRadius = "5px";
backToTopButton.style.display = "none";
backToTopButton.style.cursor = "pointer";

document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});