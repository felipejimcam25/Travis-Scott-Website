const open = document.getElementById('open');
const close = document.getElementById('close');
const navList = document.querySelector('.nav-list');


open.addEventListener('click', () => {
    navList.classList.add('visible-nav');
})

close.addEventListener('click', () => {
    navList.classList.remove('visible-nav');
})