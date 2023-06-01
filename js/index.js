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

	// pick service --> blur
	const serviceItems = document.querySelectorAll('.service__item'),
		  serviceBtnsParents = document.querySelector('.service__btns'),
		  serviceGardens = document.querySelector('[data-gardens]'),
		  serviceLawn = document.querySelector('[data-lawn]'),
		  servicePlanting = document.querySelector('[data-planting]');

	let count = 0;

	serviceBtnsParents.addEventListener('click', (event) => {
		const target = event.target;

				if(target.classList.contains('btn__service') && count < 2) {
					target.classList.add('btn__service_active')
					target.classList.remove('btn__service')
					serviceItems.forEach(item => {
						item.classList.add('blur')
					})
					removeBlur()
					count ++;
				} else if (target.classList.contains('btn__service_active')) {
					target.classList.add('btn__service')
					target.classList.remove('btn__service_active')
					serviceItems.forEach(item => {
						item.classList.add('blur')
					})
					removeBlur()
					count --;
				}
				if (count === 0) {
					serviceItems.forEach(item => {
						item.classList.remove('blur')
					})
				}
			
		function removeBlur() {	

			serviceGardens.classList.forEach(item => {
				if(item === 'btn__service_active'){		
				serviceItems.forEach(item =>{
					if(item.classList.contains('gardens'))	
					item.classList.remove('blur')	
					})
				}
			})
			serviceLawn.classList.forEach(item => {
				if(item === 'btn__service_active'){		
				serviceItems.forEach(item =>{
					if(item.classList.contains('lawn'))	
					item.classList.remove('blur')	
					})
				}
			})
			servicePlanting.classList.forEach(item => {
				if(item === 'btn__service_active'){		
				serviceItems.forEach(item =>{
					if(item.classList.contains('planting'))	
					item.classList.remove('blur')	
					})
				}
			})
		}
	});
	

});


