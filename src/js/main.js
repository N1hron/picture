import createModal from '../../../Irvas/src/js/modules/createModal'

window.addEventListener('DOMContentLoaded', () => {
    'use strict'

    createModal('.button-design', '.popup-design', '.popup-close')
    createModal('.button-consultation', '.popup-consultation', '.popup-close').showModalAfterTime(60000)

    console.log(document.documentElement.scrollHeight, document.documentElement.clientHeight, document.documentElement.scrollTop)
})