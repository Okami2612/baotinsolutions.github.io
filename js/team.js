// Show Menu
const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close');
if(navToggle){
    navToggle.addEventListener('click',() => {
        navMenu.classList.add('show-menu');
    })
}
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

// Remove Menu Mobile
const navLink = document.querySelectorAll('.nav_link');
function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// Accordion Skills
const skillContent = document.getElementsByClassName('skill_content'),
    skillHeader = document.querySelectorAll('.skill_header');
function toggleSkills (){
    let itemClass = this.parentNode.className

    for (i = 0; i < skillContent.length; i++) {
        skillContent[i].className = 'skill_content skill_close'
    }
    if(itemClass === 'skill_content skill_close'){
        this.parentNode.className = 'skill_content skill_open'
    }
}
skillHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

// Qualification Tabs
const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('[data-content]');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)
        tabContent.forEach(tabContent => {
            tabContent.classList.remove('qualification_active');
        })
        target.classList.add('qualification_active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
})

// Services Modal
const modalViews = document.querySelectorAll('.service_modal'),
    modalBtns = document.querySelectorAll('.service_button'),
    modalCloses = document.querySelectorAll('.service_modal-close');
let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}
modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})
modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

// Portfolio Swiper
let swiper = new Swiper('.portfolio_container', {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});

// Scroll Section Active Link
const sections = document.querySelectorAll('section[id]')
function scrollActive(){
    const scrollY = window.pageYOffset
    sections.forEach(current => {
        const sectionHeigh = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeigh){
            document.querySelector('.nav_menu a[href*='+sectionId+']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*='+sectionId+']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// Change Background Header
function scrollheader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollheader)

// Show scroll Top
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 500) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// Dark light theme
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

    // Previous selected
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darktheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})