/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
const modal = document.querySelector('.modal')
const modalContent = document.querySelector('.modal__content')
const regBtn = document.getElementById('regBtn')
const body = document.querySelector('body')

const regForm = document.getElementById('register-form')
const loginForm = document.getElementById('login-form')
const switchSignUpBtn = document.querySelector('.modal__sign-up-btn')
const switchLoginBtn = document.querySelector('.modal__login-btn')

const showPassIcon1 = document.querySelector('.show-pass-1')
const showPassIcon2 = document.querySelector('.show-pass-2')
const passInput1 = document.getElementById('password1')
const passInput2 = document.getElementById('password2')

let openModal = false

function toggleModal () {
  openModal = !openModal
  if (openModal) {
    modal.classList.replace('hide', 'show')
    modalContent.style.animation = 'zoomIn .3s ease-in forwards'
    body.classList.add('modal-open')
  } else {
    modal.classList.replace('show', 'hide')
    modalContent.style.animation = null
    body.classList.remove('modal-open')
  }
}

function showForm (form) {
  regForm.classList.remove('hide-form')
  loginForm.classList.remove('hide-form')
  switchSignUpBtn.classList.remove('active')
  switchLoginBtn.classList.remove('active')

  if (form === 'register') {
    loginForm.classList.add('hide-form')
    switchSignUpBtn.classList.add('active')
  } else {
    regForm.classList.add('hide-form')
    switchLoginBtn.classList.add('active')
  }
}

function togglePassVisibility (input, icon) {
  const type = input.getAttribute('type') === 'password' ? 'text' : 'password'
  input.setAttribute('type', type)
  if (type === 'text') {
    icon.classList.replace('fa-eye-slash', 'fa-eye')
  } else {
    icon.classList.replace('fa-eye', 'fa-eye-slash')
  }
}

showPassIcon1.addEventListener('click', () => {
  togglePassVisibility(passInput1, showPassIcon1)
})
showPassIcon2.addEventListener('click', () => {
  togglePassVisibility(passInput2, showPassIcon2)
})

regBtn.addEventListener('click', toggleModal)
document.addEventListener('mousedown', function (e) {
  if (e.target.closest('.modal__close') || e.target.closest('.modal__content') === null) {
    openModal === true ? toggleModal() : false
  }
})
