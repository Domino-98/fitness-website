const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal__content');
const regBtn = document.getElementById('regBtn');
const body = document.querySelector('body');

const regForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');
const switchSignUpBtn = document.querySelector('.modal__sign-up-btn');
const switchLoginBtn = document.querySelector('.modal__login-btn');

const showPassIcons = document.querySelectorAll('.show-pass');
const passInputs = document.querySelectorAll('.password');

let openModal = false;
let passVisible = false;

function toggleModal() {
	openModal = !openModal;
	if (openModal) {
		modal.classList.replace('hide', 'show');
		modalContent.style.animation = "zoomIn .3s ease-in forwards";
		body.classList.add('modal-open');
	} else {
		modal.classList.replace('show', 'hide');
		modalContent.style.animation = null;
		body.classList.remove('modal-open');
	}
}

function showForm(form) {
	regForm.classList.remove('hide-form');
	loginForm.classList.remove('hide-form');
	switchSignUpBtn.classList.remove('active');
	switchLoginBtn.classList.remove('active');

	if (form === 'register') {
		loginForm.classList.add('hide-form');
		switchSignUpBtn.classList.add('active');
	}  else {
 		regForm.classList.add('hide-form');
		switchLoginBtn.classList.add('active');
	}
}

function togglePassVisibility() {
	passVisible = !passVisible;
	if (passVisible) {
		passInputs.forEach((input) => {
			input.setAttribute('type', 'text');
		});
		showPassIcons.forEach((icon) => {
			icon.classList.replace('fa-eye-slash', 'fa-eye');
		});
	}
	else {
		passInputs.forEach((input) => {
			input.setAttribute('type', 'password');
		});
		showPassIcons.forEach((icon) => {
			icon.classList.replace('fa-eye', 'fa-eye-slash');
		})
	}
}

showPassIcons.forEach((icon) => {
	icon.addEventListener('click', togglePassVisibility);
});
regBtn.addEventListener('click', toggleModal);
document.addEventListener('mousedown', function(e) {
    if (e.target.closest('.modal__close') || e.target.closest('.modal__content') === null) {
		openModal === true ? toggleModal() : false;
    }
});
