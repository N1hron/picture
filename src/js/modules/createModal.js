import { addMargin, removeMargin } from './fixOverflow'

let isModalActive = false

export default function createModal(triggerSelector, modalSelector, closeSelector, closeOnOverlayClick = true) {
    function bindModal() {
        const triggers = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = modal.querySelector(closeSelector)

        triggers.forEach(trigger => {
            trigger.addEventListener('click', (event) => {
                event.preventDefault()
                showModal(modal)
            })
        })

        close.addEventListener('click', () => hideModal(modal))

        if (closeOnOverlayClick) {
            modal.addEventListener('click', (event) => {
                if (event.target === modal) hideModal(modal)
            })
        }

        function showModalAfterTime(time) {
            setTimeout(() => {
                console.log(isModalActive)
                if (!isModalActive) showModal(modal)
            }, time)
        }

        return { showModalAfterTime }
    }

    function showModal(modal) {
        hideAllModals()
        isModalActive = true
        modal.classList.add('fadeIn')
        modal.style.display = 'block'
        document.body.style.overflow = 'hidden'
        addMargin()
    }

    function hideModal(modal) {
        isModalActive = false
        modal.classList.remove('fadeIn')
        modal.style.display = 'none'
        document.body.style.overflow = 'auto'
        removeMargin()
    }

    function hideAllModals() {
        isModalActive = false
        document.querySelectorAll('[data-modal]').forEach(modal => hideModal(modal))
        removeMargin()
    }

    return bindModal()
}