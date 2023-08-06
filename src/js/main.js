import createModal from './modules/createModal'
import createSlider from './modules/createSlider'
import forms from './modules/forms'
import bindPhoneMask from './modules/bindPhoneMask'
import showMoreStyles from './modules/showMoreStyles'
import priceCalcuator from './modules/priceCalcuator'
import photoFilter from './modules/photoFilter'
import paintingsHover from './modules/paintingsHover'
import accordion from './modules/accordion'

window.addEventListener('DOMContentLoaded', () => {
    'use strict'

    // Modals:
    createModal('.button-design', '.popup-design', '.popup-close')
    createModal('.button-consultation', '.popup-consultation', '.popup-close').showModalAfterTime(60000)
    createModal('.fixed-gift', '.popup-gift', '.popup-close', true, true)

    // Sliders:
    createSlider('.main-slider', '.main-slider-item', null, null, true, 'vertical')
    createSlider('.feedback-slider', '.feedback-slider-item', '.main-next-btn', '.main-prev-btn', false)
    
    // Forms:
    forms()

    // Phone mask:
    bindPhoneMask('[name="phone"]')

    // Showing more styles in styles section:
    showMoreStyles()

    // Price calculator:
    priceCalcuator()

    // Photo filtration:
    photoFilter()

    // Show image on hover in sizes section:
    paintingsHover()

    // Accordion:
    accordion()
})