export default function createSlider(sliderSelector, slideSelector, nextSelector, prevSelector, auto = false, type = 'horizontal') {
    const slider = document.querySelector(sliderSelector),
          slides = slider.querySelectorAll(slideSelector),
          next = slider.querySelector(nextSelector),
          prev = slider.querySelector(prevSelector)

    let currentSlide = 1,
        prevSlide = 3,
        slidesTotal = slides.length,
        intervalId = null,
        nextClass = type === 'horizontal' ? 'fadeInRight' : 'fadeInDown',
        prevClass = type === 'horizontal' ? 'fadeInLeft' : 'fadeInUp'    

    slides.forEach((slide, i) => {
        slide.style.display = i === currentSlide - 1 ? '' : 'none'
        slide.classList.add('animated')
    })

    try {
        next.addEventListener('click', () => {
            showNextSlide()
            resetInterval()
        })
        prev.addEventListener('click', () => {
            showPrevSlide()
            resetInterval()
        })
    } catch(e) {}

    initInterval()

    function updateSlider() {
        slides[currentSlide - 1].style.display = 'block'
        slides[prevSlide - 1].style.display = 'none'

        slides[prevSlide - 1].classList.remove(nextClass, prevClass)
        
        console.log(prevSlide, '=>' , currentSlide)
    }

    function showNextSlide() {
        prevSlide = currentSlide
        currentSlide = (currentSlide + 1) % (slidesTotal + 1) || 1

        slides[currentSlide - 1].classList.add(nextClass)

        updateSlider()
    }

    function showPrevSlide() {
        prevSlide = currentSlide
        currentSlide = (currentSlide - 1) % (slidesTotal + 1) || slidesTotal

        slides[currentSlide - 1].classList.add(prevClass)

        updateSlider()
    }

    function initInterval() {
        if (auto) intervalId = setInterval(showNextSlide, 5000)
    }

    function resetInterval() {
        clearInterval(intervalId)
        initInterval()
    }
}