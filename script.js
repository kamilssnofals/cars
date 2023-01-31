
const Cars = (activeSlides = 0) => {
  const slides = document.querySelectorAll('.slide')

  slides[activeSlides].classList.add('active')

  for(const slide of slides) {
  slide.addEventListener('click', () => {
    clearActiveClasses()
    slide.classList.add('active')
  })
}

const clearActiveClasses = () => {
 slides.forEach((slide) => {
    slide.classList.remove('active')
  })
}
}
Cars(0)
