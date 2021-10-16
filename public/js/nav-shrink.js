const navItems = document.querySelectorAll('.nav__item');
const navLogo = document.querySelector('.nav__logo');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
	navItems.forEach((navItem) => {
		navItem.style.padding = "1rem";
		navItem.style.fontSize = "1.8rem";
	});
	navLogo.style.fontSize = "3rem";
  } else {
	navItems.forEach((navItem) => {
		navItem.style.padding = "1.5rem 1.2rem";
		navItem.style.fontSize = "2.2rem";
	});
	navLogo.style.fontSize = "4rem";
  }
}