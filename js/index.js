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
			target.classList.add('btn__service_active');
			target.classList.remove('btn__service');
			serviceItems.forEach(item => {
				item.classList.add('blur');
			});
			removeBlur();
			count ++;
		} else if (target.classList.contains('btn__service_active')) {
			target.classList.add('btn__service');
			target.classList.remove('btn__service_active');
			serviceItems.forEach(item => {
				item.classList.add('blur');
			});
			removeBlur();
			count --;
		}
		if (count === 0) {
			serviceItems.forEach(item => {
				item.classList.remove('blur');
			});
		}
			
		function removeBlur() {	

			serviceGardens.classList.forEach(item => {
				if(item === 'btn__service_active'){		
					serviceItems.forEach(item =>{
						if(item.classList.contains('gardens'))	
							item.classList.remove('blur');
					});
				}
			});
			serviceLawn.classList.forEach(item => {
				if(item === 'btn__service_active'){		
					serviceItems.forEach(item =>{
						if(item.classList.contains('lawn'))	
							item.classList.remove('blur');
					});
				}
			});
			servicePlanting.classList.forEach(item => {
				if(item === 'btn__service_active'){		
					serviceItems.forEach(item =>{
						if(item.classList.contains('planting'))	
							item.classList.remove('blur');
					});
				}
			});
		}
	});
	
	// prices menu
	const priceMenu = document.querySelector('.prices__items'),
		pricesBtnsActive = document.querySelectorAll('.prices__items_active'),
		pricesBtns = document.querySelectorAll('.prices__items_btn');

	let pricesCount = 0;	

	priceMenu.addEventListener('click', (event) => {
		const target = event.target;
	

		if (target.classList.contains('prices__items_btn')) {
			pricesBtns.forEach((item, i) => {
				if(item === target && pricesCount < 1) {
					showMenu(i);
					pricesCount ++;
				} else if (item === target && pricesCount === 1){
					
					pricesBtnsActive.forEach((item) => {
						pricesCount --;
						if(item !== target){
							item.classList.add('hide', 'fade');
						}
					});
					pricesBtns.forEach((item) => {
						
						item.classList.remove('hide');
						showMenu(i);
						pricesCount ++;					
					});
					
				}
			});
			

		} else if (target.classList.contains('prices__items_active')) {
			pricesBtnsActive.forEach((item, i) => {
				if(item === target) {
					hideMenu(i);
					pricesCount --;
				}
			});
		}

		function showMenu(i) {
			target.classList.add('hide');		
			pricesBtnsActive[i].classList.remove('hide');
			pricesBtnsActive[i].classList.add('fade');
		}

		function hideMenu(i){
			target.classList.add('hide');		
			pricesBtns[i].classList.remove('hide');
			pricesBtns[i].classList.add('fade');
		}
	});

	// contact menu

	const cityName = document.querySelector('.contact__city_name'),
		arrowDark = document.querySelector('.arrow_dark'),
		contactMenu = document.querySelector('.contact__city_menu'),
		cityMenu = document.querySelector('[data-city]'),
		cityBoardAdress = document.querySelectorAll('.contact__city_board_adress'),
		cityBoard = document.querySelector('.contact__city_board'),
		contactImg = document.querySelector('.contact__img');

	
		
	cityName.addEventListener('click', () => {
		
		if(cityName.classList.contains('contact__city_name') || cityName.classList.contains('contact__city_name_active')){

			showCity();
	
		}

		cityMenu.addEventListener('click', (event) => {
			const target = event.target;
			let div = document.createElement('div');

			div.classList.add('arrow_dark_active');
			
			cityName.textContent = target.textContent;

			contactMenu.classList.add('hide');
			cityName.append(div);
			
			showAdress();
			
		});

		function showCity () {
			cityName.classList.add('contact__city_name_active');
			arrowDark.classList.toggle('arrow_dark_active');
			contactMenu.classList.toggle('hide');
			contactMenu.classList.add('fade');
			cityBoard.classList.add('hide');
			cityBoardAdress.forEach(city =>{
				city.classList.add('hide');
			});
			
		
		}

		function showAdress () {
			cityBoardAdress.forEach( (city) => {
				if (cityName.textContent === city.children[0].textContent) {
					city.classList.remove('hide');
					cityBoard.classList.remove('hide');
				} else if(document.body.offsetWidth < 591) {
					contactImg.classList.add('hide');
				}
			
			});
		}

	});

});


