function ratioDisplay(number) {
  const ratio_info = document.querySelector('.display-info-ratio')
  ratio_info.textContent = `${number}x${number}`
  ratio_info.classList.add('display-info-label')
}

export { ratioDisplay }
