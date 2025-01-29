/*? no js js needed from me */

window.addEventListener('scroll', ()=> {
  const heroCaption = document.querySelector('#hero figcaption')
  if (window.scrollY > 199) {
    heroCaption.style.display = 'none'
  } else {
    heroCaption.style.display = 'block'
  }
})

// cluster price
const typeCluster = ["standard","deluxe","superior","cottage"]
const bookingBtn = document.querySelectorAll('#rooms .price button')

bookingBtn.forEach(element => {
  element.addEventListener('click',() => alert("On Building \nNot Available for Now !"))
});
