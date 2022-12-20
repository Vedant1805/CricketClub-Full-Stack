const img = document.querySelectorAll('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 700) {
        navbar.classList.add('navcolor');

    } else {
        navbar.classList.remove('navcolor');
    }

})
console.log(window.scrollY);