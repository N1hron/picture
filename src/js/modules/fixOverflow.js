const scrollbarWidth = calcScrollbarWidth()

export function addMargin() {
    document.body.style.marginRight = scrollbarWidth + 'px'
}

export function removeMargin() {
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

