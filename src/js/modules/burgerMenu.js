export default function burgerMenu(menuSelector, triggerSelector) {
    const menu = document.querySelector(menuSelector),
          trigger = document.querySelector(triggerSelector)

    menu.style.display = 'none'
    document.addEventListener('click', event => {
        if (!(event.target.closest('.burger-menu') || event.target.closest('.burger'))) menu.style.display = 'none'
    })

    trigger.addEventListener('click', handleClick)

    function handleClick() {
        if (screen.availWidth <= 992) {
            menu.style.display = menu.style.display === 'none' ? 'block' : 'none'
        }
    }
}