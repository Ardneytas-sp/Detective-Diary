const typedWord = document.getElementById('typed-word');
const text = "Diary";
let index = 0;
let isDeleting = false;

function type() {
    if (isDeleting) {
        // Deleting animation
        typedWord.textContent = text.substring(0, index--) + '|';
        if (index === 0) {
            isDeleting = false;
        }
    } else {
        // Typing animation
        typedWord.textContent = text.substring(0, index++) + '|';
        if (index === text.length + 1) {
            isDeleting = true;
        }
    }

    setTimeout(type, isDeleting ? 200 : 500); // Adjust typing and deleting speeds
}

type(); 

// Blinking cursor animation
setInterval(() => {
    const cursor = typedWord.textContent.includes('|') ? '' : '|';
    typedWord.textContent = text.substring(0, index) + cursor;
}, 500); // Cursor blinking speed

// Additional animations (for demonstration purposes)
const navbar = document.getElementById('navbar');
navbar.addEventListener('mouseover', (event) => {
    const comet = document.createElement('div');
    comet.classList.add('comet');
    comet.style.left = event.clientX + 'px';
    comet.style.top = event.clientY + 'px';
    document.body.appendChild(comet);

    setTimeout(() => {
        comet.remove();
    }, 2000); // Remove comet after animation
});
