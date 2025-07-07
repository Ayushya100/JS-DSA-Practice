let indicator = document.querySelector('scroll-indicator progress');

// Scroll Height provides the overall height of the window and Client Height provides the current height what is the client window size
let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', onScroll);

function onScroll() {
    let scrollTop = document.documentElement.scrollTop;     // Scroll Top defines the top position of the scroll bar
    let scrolled = (scrollTop / scrollHeight) * 100;

    indicator.style.width = `${scrolled}%`;
}

// Topics to read: scrollLeft, scrollRight, and scrollBottom
