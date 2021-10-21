// Variables for navbar shrink
const nav = document.querySelector('.nav')
const navItems = document.querySelectorAll('.nav__item')
const navLogo = document.querySelector('.nav__logo')

// Variables for navbar toggler
const navMenu = document.querySelector('.nav__list')
const navLinks = document.querySelectorAll('.nav__link')
const hamburger = document.querySelector('.nav__hamburger')

window.onscroll = function () { scrollFunction() }

// Nav shrink function
function scrollFunction () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    nav.style.padding = '1rem'
    navItems.forEach((navItem) => {
      navItem.style.fontSize = '1.8rem'
    })
    navLogo.style.fontSize = '3rem'
  } else {
    nav.style.padding = '1.5rem 1.2rem'
    navItems.forEach((navItem) => {
      navItem.style.fontSize = '2.2rem'
    })
    navLogo.style.fontSize = '4rem'
  }
}

// Toggle nav menu
function openMenu () {
  hamburger.classList.toggle('active')
  navMenu.classList.toggle('active')
}

// Close nav menu when link is clicked
function closeMenu () {
  hamburger.classList.remove('active')
  navMenu.classList.remove('active')
}

hamburger.addEventListener('click', openMenu)
navLinks.forEach((link) => link.addEventListener('click', closeMenu))
