const Hmenu = document.querySelector('.m-icon');
let close = document.querySelector('.close i');
let visible = document.querySelector('.links-menu');
let moon = document.querySelector('.moon');

Hmenu.addEventListener('click', () => {
    visible.classList.add('visible');
    document.querySelector('.links-menu-bg').style.display='block';
    document.body.style.overflow='hidden';
});

close.addEventListener('click', () => {
    visible.classList.remove('visible');
    document.querySelector('.links-menu-bg').style.display='none';
    document.body.style.overflow='unset';
    /*çalış artık gevşek*/
});

moon.onclick = function (event) {
    if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark');
        document.querySelector('.moon i').classList.add('bx-moon');
        document.querySelector('.moon i').classList.remove('bx-sun');
        document.querySelector('.ch').innerHTML = 'Dark Theme';
    } else {
        document.body.classList.add('dark');
        document.querySelector('.moon i').classList.remove('bx-moon');
        document.querySelector('.moon i').classList.add('bx-sun');
        document.querySelector('.ch').innerHTML = 'Light Theme';
    }
};
