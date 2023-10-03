
const toggle=document.querySelector('#hellg');
const menu=document.querySelector('.dropdown-menu');
const go=document.querySelector('#cross');

toggle.onclick =() => {
    menu.classList.add('active');}
    go.onclick =() => {
        menu.classList.remove('active');
    }
