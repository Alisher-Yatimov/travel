const burgerBtn = document.querySelector('.burger-menu-btn')
const navigation = document.querySelector('.header-navigation')
const sliderTrack = document.querySelector('.slider-track')
const slides = document.querySelectorAll('.slide')
const prevBtn = document.querySelector('.slider-prev')
const nextBtn = document.querySelector('.slider-next')
const slideCount = slides.length
const slideWidth = +getComputedStyle(slides[0]).width.replace('px', '')

let sliderGap = 0


const startCoords = {
  x: 0,
  y: 0,
}

burgerBtn.addEventListener('click', () => {
  if (navigation.className.includes('active')) {
      navigation.className = navigation.className.replace(' active', '')
      burgerBtn.className = burgerBtn.className.replace(' active', '')
  } else {
    navigation.className += ' active'
    burgerBtn.className += ' active'
  }
})

sliderTrack.addEventListener('touchstart', (event) => {
  const coords = event.touches[0]
  startCoords.x = coords.clientX
  startCoords.y = coords.clientY
})

sliderTrack.addEventListener('touchend', (event) => {
  console.log();
  const endCoords = {
    x: event.changedTouches[0].clientX,
    y: event.changedTouches[0].clientY,
  }

  const diff = startCoords.x - endCoords.x
  if(diff > 0 && Math.abs(sliderGap) < slideCount - 1) {
    sliderGap -= 1
  }

  if (diff < 0 && sliderGap < 0) {
    sliderGap += 1
  }

  sliderTrack.style.transform = `translateX(${sliderGap * slideWidth}px)`
})

prevBtn.addEventListener('click', () => {
  if (sliderGap < 0) {
    sliderGap += 1
  }
  sliderTrack.style.transform = `translateX(${sliderGap * slideWidth}px)`
})

nextBtn.addEventListener('click', () => {
  if(Math.abs(sliderGap) < slideCount - 1) {
    sliderGap -= 1
  }
  sliderTrack.style.transform = `translateX(${sliderGap * slideWidth}px)`
})