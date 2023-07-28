const scrollbarWidth = calcScrollbarWidth()

export function addMargin(element) {
    if (element) element.style.marginRight = scrollbarWidth + 'px'
    document.body.style.marginRight = scrollbarWidth + 'px'
}

export function removeMargin(element) {
    if (element) element.style.marginRight = 0
    document.body.style.marginRight = 0
}

function calcScrollbarWidth() {
    const element = document.createElement('div')
    element.style.cssText = 'height: 50px; width: 50px; overflow-y: scroll; visibility: hidden;'
    
    document.body.appendChild(element)
    const scrollbarWidth = element.offsetWidth - element.clientWidth
    element.remove()

    return scrollbarWidth
}

