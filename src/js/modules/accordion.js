export default function accordion() {
    const blocks = document.querySelectorAll('.accordion-block'),
          triggers = document.querySelectorAll('.accordion-heading > span')
    
    triggers.forEach((trigger, i) => trigger.addEventListener('click', () => toggleVisibility(i)))

    function toggleVisibility(index) {
        const trigger = triggers[index],
              content = blocks[index]

        trigger.parentElement.classList.toggle('ui-accordion-header-active')
        content.classList.toggle('accordion-block-visible')
        content.style.maxHeight = content.classList.contains('accordion-block-visible') ? content.scrollHeight + 30 + 'px' : 0
    }
}