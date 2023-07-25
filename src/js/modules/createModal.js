import { addMargin, removeMargin } from './fixOverflow'

let isModalActive = false,
    triggerPressed = false

export default function createModal(triggerSelector, modalSelector, closeSelector, removeTrigger = false, showAtTheEnd = false, closeOnOverlayClick = true) {
    function bindModal() {
        const triggers = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = modal.querySelector(closeSelector)

        triggers.forEach(trigger => {
            trigger.addEventListener('click', (event) => {
                triggerPressed = true

                event.preventDefault()
                if (removeTrigger) trigger.remove()
                showModal(modal)
            })
        })

        close.addEventListener('click', () => hideModal(modal))

        if (closeOnOverlayClick) {
            modal.addEventListener('click', (event) => {
                if (event.target === modal) hideModal(modal)
            })
        }

        if (showAtTheEnd) {
            let scrollHeight

            window.addEventListener('scroll', () => {
                scrollHeight = Math.max(
                    document.body.scrollHeight, document.documentElement.scrollHeight,
                    document.body.offsetHeight, document.documentElement.offsetHeight,
                    document.body.clientHeight, document.documentElement.clientHeight
                );
    
                if ((scrollHeight <= document.documentElement.clientHeight + window.scrollY) && !triggerPressed) {
                    document.querySelectorAll(triggerSelector).forEach(trigger => trigger.click())
                    showModal(modal)
                }
            })
        }

        function showModalAfterTime(time) {
            setTimeout(() => {
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
        document.body.style.overflow = ''
        removeMargin()
    }

    function hideAllModals() {
        isModalActive = false
        document.querySelectorAll('[data-modal]').forEach(modal => hideModal(modal))
        removeMargin()
    }

    return bindModal()
}