
// prices acardion handler

const clickPricesAcardionHandler = () => {

    removeAcardionButtonActiveStyle(accordionButtons);
    removeAcardionContent(accordionContents);
    addAcardionButtonActiveStyle(accordionButtons);
}

const removeAcardionButtonActiveStyle = (accordionButtons) => {
    accordionButtons.forEach(button => {
        button.classList.remove('accordion__btn-active')
    })
}

const removeAcardionContent = (accordionContents) => {
    accordionContents.forEach(content => {
        content.classList.remove('active')
    })
}


const addAcardionButtonActiveStyle = (accordionButtons) => {

    accordionButtons.forEach((button, i) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('accordion__btn-active')) {
                removeAcardionButtonActiveStyle(accordionButtons);
                removeAcardionContent(accordionContents)

            }
            else {
                removeAcardionButtonActiveStyle(accordionButtons);
                button.classList.add('accordion__btn-active')

                accordionContents.forEach((accordionContent, j) => {
                    if (i == j) { accordionContents[j].classList.toggle('active') }
                    else { accordionContents[j].classList.remove('active'); }

                })

            }

        })
    })
}


// service filter handler

const serviceFilterHandler = () => {

    const serviceButtons = document.querySelectorAll('.services__button');
    const serviceCards = document.querySelectorAll('.service__card');

    serviceButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const serviceCategory = button.dataset.filter;
            button.classList.toggle('services__button-active')
            serviceFilter(serviceCategory, serviceCards)
            disableButtonMode(serviceButtons, serviceCards)

        })
    })

}

const serviceCardsDefoultMode = (cards) => {

    cards.forEach(card => {
        card.classList.remove('blur')

    })


}

const disableButtonMode = (buttons, cards) => {

    let activeButtonsCount = 0;
    buttons.forEach(button => {

        if (button.classList.contains('services__button-active')) {
            activeButtonsCount++
        }
        if (activeButtonsCount === 2) {
            buttons.forEach(button => {
                if (!button.classList.contains('services__button-active')) { button.disabled = true; }
            })
        }
        else { button.disabled = false }


    })
    if (activeButtonsCount === 0) {
        serviceCardsDefoultMode(cards)
    }

    //console.log('activeButtonsCount = ' + activeButtonsCount)

}

const serviceFilter = (category, items) => {
    items.forEach((item) => {

        const isItemFiltred = item.classList.contains(category)
        //console.log(isItemFiltred, item)

        if (isItemFiltred) {
            item.classList.toggle('active-card');
            item.classList.remove('blur');
        }

        if (item.classList.contains('active-card')) {
            item.classList.remove('blur');
        }

        else { item.classList.add('blur'); }

    }


    )
    //console.log('clic N = ', i++)
}

// end filter for Service and our projects 

//contacts handler
const contactsHandler = () => {

    document.querySelector('.contacts__container').addEventListener('click', (e) => {

        const selectWrapper = document.querySelector('.contacts__select-wrapper');
        const selectCities = document.querySelectorAll('.contacts__select-city');
        const contactsRow = document.querySelector('.contacts__row');
        const cityCard = document.querySelector('.contacts__city-card')

        if (e.target.classList.contains('contacts__row')) {
            openContactsSelect(contactsRow, selectWrapper, cityCard)
        }


        if (e.target.classList.contains('contacts__select-city')) {
            const selectedCity = e.target;
            chooseCity(selectedCity, contactsRow, cityCard, selectWrapper);
            contactsCardData(selectedCity, cityCard)
        }

        if (e.target.classList.contains('contacts__call-link')) {

        }

    })

}

const openContactsSelect = (row, selectWrapper, cityCard) => {
    
    row.classList.remove('contacts__row-selected');
    row.classList.toggle('contacts__row-active');
    row.textContent = 'City';
    selectWrapper.classList.toggle('contacts__select-active');
    cityCard.classList.remove('active__contact-card')
    
}

const chooseCity = (selectedCity, contactsRow, cityCard, selectWrapper) => {

    contactsRow.textContent = selectedCity.textContent;
    contactsRow.classList.add('contacts__row-selected');
    contactsRow.classList.remove('contacts__row-active');
    cityCard.classList.add('active__contact-card');
    selectWrapper.classList.remove('contacts__select-active');
}

const contactsCardData = (selectedCity, cityCard) => {
   
    const cardValueCity = document.querySelector('.contacts__value-city');
    const cardValuePhone = document.querySelector('.contacts__value-phone');
    const cardValueOffice = document.querySelector('.contacts__value-office');
    const cardPhoneNumber = document.querySelector('.contacts__call-link');
    
    
    const cities = [['Yonkers, NY', '+1 914 678 0003', '511 Warburton Ave'], ['Canandaigua, NY', '+1 585 393 0001', '151 Charlotte Street'], ['Sherrill, NY', '+1 315 908 0004', '14 WEST Noyes BLVD'], ['New York City', '+1 212 456 0002', '9 East 91st Street']]
    if (selectedCity.textContent === 'Yonkers, NY') { i = 0; console.log('i = '+i)} 
    if (selectedCity.textContent === 'Canandaigua, NY') { i = 1 }
    if (selectedCity.textContent === 'Sherrill, NY') { i = 2 }
    if (selectedCity.textContent ==='New York City') { i = 3 }
    
    let callLink = ''+'tel:'+cities[i][1];
   
    cardValueCity.textContent = cities[i][0]
    cardValuePhone.textContent = cities[i][1]
    cardValueOffice.textContent = cities[i][2]
    cardPhoneNumber.href = callLink 

    // console.log(cardPhoneNumber.href);

}








