import modal from './modules/modal'
import slider from './modules/slider'
import forms from './modules/forms'
import phoneMask from './modules/phoneMask'
import showMoreStyles from './modules/showMoreStyles'
import priceCalcuator from './modules/priceCalcuator'
import photoFilter from './modules/photoFilter'
import paintingsHover from './modules/paintingsHover'
import accordion from './modules/accordion'
import burgerMenu from './modules/burgerMenu'

window.addEventListener('DOMContentLoaded', () => {
    'use strict'

    // Modals:
    modal('.button-design', '.popup-design', '.popup-close')
    modal('.button-consultation', '.popup-consultation', '.popup-close').showModalAfterTime(60000)
    modal('.fixed-gift', '.popup-gift', '.popup-close', true, true)

    // Sliders:
    slider('.main-slider', '.main-slider-item', null, null, true, 'vertical')
    slider('.feedback-slider', '.feedback-slider-item', '.main-next-btn', '.main-prev-btn', true)
    
    // Forms functionality:
    forms()

    // Phone mask:
    phoneMask('[name="phone"]')

    // Showing more styles in styles section:
    showMoreStyles()

    // Price calculator:
    priceCalcuator()

    // Photo filtration:
    photoFilter()

    // Show image on hover in sizes section:
    paintingsHover()

    // Accordion:
    accordion('.accordion-block', '.accordion-heading > span')

    // Burger menu that shows only when screen width is less than 993px:
    burgerMenu('.burger-menu', '.burger')
})