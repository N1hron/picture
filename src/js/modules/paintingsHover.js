export default function paintingsHover() {
    const paintings = document.querySelectorAll('.sizes-block'),
          srcBase = 'assets/img/'

    paintings.forEach(painting => {
        const image = painting.querySelector('img')

        painting.addEventListener('mouseover', () => showImage(image))
        painting.addEventListener('mouseleave', () => hideImage(image))
    })

    function showImage(image) {
        image.src = `${srcBase}${image.className}-1.png`
        Array.from(image.parentElement.children).forEach(element => {
            element.style.display = element === image ? '' : 'none'
        })
    }
    
    function hideImage(image) {
        image.src = `${srcBase}${image.className}.png`
        Array.from(image.parentElement.children).forEach(element => element.style.display = '')
    }
}