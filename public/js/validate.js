/* eslint-disable prefer-regex-literals */
/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
// Select all register/login inputs
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const passInput = document.getElementById('password1')
const tos = document.getElementById('tos')

let errorMsg = ''
let errorCount = 0
const minChars = 3
const maxChars = 12

const isRequired = value => value !== ''

function checkEmail (email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

function checkPassword (password) {
  const re = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})')
  return re.test(password)
}

function showError (input, message) {
  input.classList.remove('success')
  input.classList.add('error')
  errorMsg = message
  input.nextElementSibling.textContent = errorMsg
  errorCount++
}

function showSuccess (input) {
  input.classList.add('success')
  input.nextElementSibling.textContent = ''
}

function storeFormData () {
  const user = {
    name: regForm.name.value,
    email: regForm.email.value,
    password: regForm.password.value
  }
  console.log(user)
}

function checkValidity () {
  // Validate name
  if (!isRequired(nameInput.value)) {
    showError(nameInput, 'Nazwa jest wymagana')
  } else if (nameInput.value.length < minChars || nameInput.value.length > maxChars) {
    showError(nameInput, `${nameInput.placeholder} musi zawierać conajmniej ${minChars} znaki i maksymalnie ${maxChars} znaków`)
  } else {
    showSuccess(nameInput)
  }

  // Validate email
  if (!isRequired(emailInput.value)) {
    showError(emailInput, 'Adres email jest wymagany')
  } else if (!checkEmail(emailInput.value)) {
    showError(emailInput, 'Adres email jest nieprawidłowy')
  } else {
    showSuccess(emailInput)
  }

  // Validate password
  if (!isRequired(passInput.value)) {
    showError(passInput, 'Hasło jest wymagane')
  } else if (!checkPassword(passInput.value)) {
    showError(passInput, 'Hasło musi zawierać conajmniej 8 znaków oraz: 1 wielką/małą literę, 1 cyfrę. 1 znak specjalny')
  } else {
    showSuccess(passInput)
  }

  // Validate tos
  if (!tos.checked) {
    showError(tos, 'Musisz zaakceptować warunki użytkowania i politykę prywatności')
  } else {
    showSuccess(tos)
  }
}

function checkLoginValidity (email, password) {
  // Validate email
  if (!isRequired(email.value)) {
    showError(email, 'Adres email jest wymagany')
  } else if (!checkEmail(email.value)) {
    showError(email, 'Adres email jest nieprawidłowy')
  } else {
    showSuccess(email)
  }

  // Validate password
  if (!isRequired(password.value)) {
    showError(password, 'Hasło jest wymagane')
  } else {
    showSuccess(password)
  }
}

regForm.addEventListener('submit', (e) => {
  e.preventDefault()
  // Reset error count
  errorCount = 0
  // Check form validity
  checkValidity()
  // Submit to the server if there are no errors
  if (errorCount === 0) {
    storeFormData()
  }
})

loginForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const email = e.target[0]
  const pass = e.target[1]
  // Reset error count
  errorCount = 0
  // Check form validity
  checkLoginValidity(email, pass)
  if (errorCount === 0) {
    console.log(email.value, pass.value)
  }
})
