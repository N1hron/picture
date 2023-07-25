import createModal from './modules/createModal'
import createSlider from './modules/createSlider'

window.addEventListener('DOMContentLoaded', () => {
    'use strict'

    // Modals:
    createModal('.button-design', '.popup-design', '.popup-close')
    createModal('.button-consultation', '.popup-consultation', '.popup-close').showModalAfterTime(60000)
    createModal('.fixed-gift', '.popup-gift', '.popup-close', true, true)

    // Sliders:
    createSlider('.main-slider', '.main-slider-item', null, null, true, 'vertical')
    createSlider('.feedback-slider', '.feedback-slider-item', '.main-next-btn', '.main-prev-btn', false)
    
})