export default function scroll() {
    const up = document.querySelector('.pageup'),
          firstSection = document.querySelector('section'),
          links = document.querySelectorAll('[href^="#"]')

    const firstSectionOffsetTop = window.scrollY + firstSection.getBoundingClientRect().top

    up.classList.add('animated')
    up.style.display = 'none'
    up.style.pointerEvents = 'none'

    window.addEventListener('scroll', () => {
        if (window.scrollY >= firstSectionOffsetTop) {
            up.style.display = ''
            up.style.pointerEvents = ''
            up.classList.remove('fadeOut')
            up.classList.add('fadeIn')
        } else {
            up.style.pointerEvents = 'none'
            up.classList.remove('fadeIn')
            up.classList.add('fadeOut')
        }
    })
    
    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault()
    
            const destination = document.querySelector(link.hash)
            let offset = Math.round(destination.getBoundingClientRect().top)
            const direction = offset > 0 ? 'forward' : 'backward',
                  speed = 30
            
            let requestId = requestAnimationFrame(frame);

            ['wheel', 'touchstart'].forEach(eventType => window.addEventListener(eventType, () => cancelAnimationFrame(requestId)))
            window.addEventListener('keydown', (event) => {
                const keyCode = event.keyCode
                console.log(event)
                if ([32, 33, 34, 38, 40].includes(keyCode) || (event.ctrlKey && [36, 35].includes(keyCode))) cancelAnimationFrame(requestId)
            })

            function frame() {
                let offset = Math.round(destination.getBoundingClientRect().top)
                
                switch (direction) {
                    case 'forward': 
                        if (offset > 0) {
                            scrollTo(0, scrollY + speed)
                            requestId = requestAnimationFrame(frame)
                        } else location.hash = link.hash
                        break
                    case 'backward':
                        if (offset < 0) {
                            scrollTo(0, scrollY - speed)
                            requestId = requestAnimationFrame(frame)
                        } else location.hash = link.hash
                        break
                }
            }
        })
    })

}