export default function accordion(contentSelector, triggerSelector) {
    const contents = document.querySelectorAll(contentSelector),
          triggers = document.querySelectorAll(triggerSelector)
    
    triggers.forEach((trigger, i) => trigger.addEventListener('click', () => toggleVisibility(i)))

    function toggleVisibility(index) {
        const trigger = triggers[index],
              content = contents[index]

        trigger.parentElement.classList.toggle('ui-accordion-header-active')
        content.classList.toggle('accordion-block-visible')
        content.style.maxHeight = content.classList.contains('accordion-block-visible') ? content.scrollHeight + 30 + 'px' : 0
    }
}