import { ratioDisplay } from './ratioInfo.js'
function createGrid(number) {
  const grid_container = document.querySelector('.grid-container')
  for (let index = 0; index < number; index++) {
    const horizontal_container = createHorizontalContainer()
    for (let j = 0; j < number; j++) {
      const pixel = createPixel()
      horizontal_container.appendChild(pixel)
    }
    grid_container.appendChild(horizontal_container)
  }
}

function createHorizontalContainer() {
  const horizontal_container = document.createElement('div')
  horizontal_container.classList.add('horizontal-container')
  return horizontal_container
}

function createPixel() {
  const pixel = document.createElement('div')
  pixel.classList.add('pixel')
  pixel.addEventListener('mousemove', (e) => {
    e.preventDefault();
    if (e.buttons == 1) {
      e.target.style['background-color'] = "red"
    }
  })
  return pixel
}

function inputButtonFeature() {
  const input_button = document.querySelector('.input-submit-button')
  input_button.addEventListener('click', () => {
    const input_box = document.querySelector('.input')
    const number = input_box.value
    removeAllPixels()
    createGrid(number)
    ratioDisplay(number)
  })
}

function removeAllPixels() {
  const horizontal_container = Array.from(document.querySelectorAll('.horizontal-container'))
  for (let index = 0; index < horizontal_container.length; index++) {
    horizontal_container[index].remove();
  }
}

function defaultGrid(){
  const number = 16;
  createGrid(number)
  ratioDisplay(number)
}

export { inputButtonFeature, defaultGrid }
