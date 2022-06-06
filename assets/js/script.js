'use strict';
// navbar toggle

const openBtn = document.querySelector("[data-nav-open-btn]");
const navBar = document.querySelector("[data-navbar]");
const closeBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");


const eleArr = [openBtn, overlay, closeBtn];
// loop through all elements in eleArr with for array
for (let i = 0; i < eleArr.length; i++) {
    eleArr[i].addEventListener('click', function () {
        navBar.classList.toggle('active');
        overlay.classList.toggle('active');
    });
}


//toogle when any a is selected
const navLinks = document.querySelectorAll("[data-nav-link]");
// loop throughall elements in navLinks
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function () {
        navBar.classList.toggle('active');
        overlay.classList.toggle('active');
    });
}

//activate header and go-top button when window scroll down to 400px;
const header = document.querySelector("[data-header]");
const goTop = document.querySelector("[data-gotop]");

window.addEventListener('scroll', function () {
    if(window.scrollY >= 400){
        header.classList.add('active');
        goTop.classList.add('active');
    }
    else{
        header.classList.remove('active');
        goTop.classList.remove('active');
    }

});
