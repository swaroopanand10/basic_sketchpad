function eraseAll() {
  const pixel = Array.from(document.querySelectorAll('.pixel'))
  for (let index = 0; index < pixel.length; index++) {
    pixel[index].style["background-color"] = "#ffffff"

  }
}
function clearButtonFeature() {
  const clear_button = document.querySelector('.clear-button')
  clear_button.addEventListener('click', eraseAll)
}

export { clearButtonFeature}
