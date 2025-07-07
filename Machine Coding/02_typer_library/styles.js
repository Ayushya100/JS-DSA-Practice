let typedTextSpan = document.querySelector('typed-text');
const cursor = document.querySelector('cursor');

const words = ['Word1', 'Word2', 'Word3', 'Word4', 'Word5'];
const typingDelay = 200;
const erasingDelay = 200;
const newLetterDelay = 200;

let index = 0;
let charIndex = 0;

// DOMContentLoaded is an event listener which gets executed when the entire page is loaded on the screen automatically. So it is useful when executing some operation on page load automatically.
document.addEventListener('DOMContentLoaded', () => {
    if (words.length) {
        setTimeout(type, newLetterDelay);
    }
});

function type() {
    if (charIndex < words[index].length) {
        typedTextSpan.textContent += words[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newLetterDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = words[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        index++;
        if (index >= words.length) {
            index = 0;
        }
        setTimeout(type, typingDelay);
    }
}