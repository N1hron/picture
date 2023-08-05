export default function photoFilter() {
    const menu = document.querySelector('.portfolio-menu'),
          photos = document.querySelectorAll('.portfolio-block'),
          emptyMessage = document.querySelector('.portfolio-no')

    emptyMessage.classList.add('animated', 'fadeIn')

    menu.addEventListener('click', event => {
        const target = event.target

        if (target.tagName === 'LI') {
            makeActive(target)
            
            let isEmpty = true

            photos.forEach(photo => {
                photo.classList.add('animated', 'fadeIn')

                if (photo.classList.contains(target.className.split(' ')[0])) {
                    photo.style.display = 'block'
                    isEmpty = false
                } else photo.style.display = 'none'
                
                emptyMessage.style.display = isEmpty ? 'block' : 'none'
            })
        }
    })

    function makeActive(btn) {
        menu.querySelectorAll('LI').forEach(element => {
            if (element === btn) element.classList.add('active')
            else element.classList.remove('active')
        })
    }
}