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
		  serviceBtnsParents = document.querySelector('.service__btns');


	serviceBtnsParents.addEventListener('click', (event) => {
		const target = event.target;
		
		if(target.classList.contains('btn__service')) {
			target.classList.add('btn__service_active')
			target.classList.remove('btn__service')
			addBlur(target);
		} else if(target.classList.contains('btn__service_active')) {
			target.classList.add('btn__service')
			target.classList.remove('btn__service_active')
			removeBlur(target);
		}
	})

	function addBlur(target) {
		if (target.classList.contains('btn__service_active')){
			if(target.classList.contains('gardens')) {
				serviceItems.forEach(item =>{
					if(item.classList.contains('gardens')) {
						item.classList.add('blur')
					}
				})
			} else if(target.classList.contains('planting')) {
				serviceItems.forEach(item =>{
					if(item.classList.contains('planting')) {
						item.classList.add('blur')
					}
				})
			} else if(target.classList.contains('lawn')) {
				serviceItems.forEach(item =>{
					if(item.classList.contains('lawn')) {
						item.classList.add('blur')
					}
				})
			}	
		}
	}

	function removeBlur(target) {
		if (target.classList.contains('btn__service')){
			if(target.classList.contains('gardens')) {
				serviceItems.forEach(item =>{
					if(item.classList.contains('gardens')) {
						item.classList.remove('blur')
					}
				})
			} else if(target.classList.contains('planting')) {
				serviceItems.forEach(item =>{
					if(item.classList.contains('planting')) {
						item.classList.remove('blur')
					}
				})
			} else if(target.classList.contains('lawn')) {
				serviceItems.forEach(item =>{
					if(item.classList.contains('lawn')) {
						item.classList.remove('blur')
					}
				})
			}	
		}
	}

	
	// serviceBtns.forEach((item, i) => {
	// 	item.addEventListener('click', () => {
			
	// 		item.classList.toggle('btn__service_active');
	// 		addBlur()
	
	// 	})
	// })

	


	
	

	


});


