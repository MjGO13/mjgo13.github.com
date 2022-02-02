let menuBtn = document.querySelector('.menu');
let cerrarBtn = document.querySelector('.close');

menuBtn.addEventListener('click',()=>{
    document.querySelector('.menu-screen').classList.add('active');
});

cerrarBtn.addEventListener('click',()=>{
    document.querySelector('.menu-screen').classList.remove('active');
});