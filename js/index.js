window.addEventListener('DOMContentLoaded', () => {
	// hamburger
	const menu = document.querySelector('.header__menu'),
		menuItem = document.querySelectorAll('.header__menu_item'),
		hamburger = document.querySelector('.hamburger'),
		sections = document.querySelectorAll('section');

	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('hamburger_active');
		menu.classList.toggle('header__menu_active');
	});

	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			hamburger.classList.toggle('hamburger_active');
			menu.classList.toggle('header__menu_active');
		});
	});

	// close mobile menu
	sections.forEach(item => {
		item.addEventListener('click', () => {
			hamburger.classList.remove('hamburger_active');
			menu.classList.remove('header__menu_active');
		});
	});


});


