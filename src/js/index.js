/*? no js js needed from me */

window.addEventListener('scroll', ()=> {
  const heroCaption = document.querySelector('#hero figcaption')
  if (window.scrollY > 199) {
    heroCaption.style.display = 'none'
  } else {
    heroCaption.style.display = 'block'
  }
})