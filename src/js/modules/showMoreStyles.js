export default function showMoreStyles() {
    const button = document.querySelector('.button-styles'),
          styles = button.previousElementSibling.querySelectorAll('div')

    button.addEventListener('click', () => {
        styles.forEach(style => {
            if (getComputedStyle(style).display === 'none') {
                style.className = 'col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1 animated fadeIn'
            }
        })
        button.remove()
    })
}