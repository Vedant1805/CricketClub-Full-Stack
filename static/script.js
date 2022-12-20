const nav = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 680) {
        nav.classList.add('scrolling-active');
    } else {
        nav.classList.remove('scrolling-active');
    }

})

console.log(scrollY);