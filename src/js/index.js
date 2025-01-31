/*? no js js needed from me */

window.addEventListener('scroll', ()=> {
  const heroCaption = document.querySelector('#hero figcaption')
  if (window.scrollY > 199) {
    heroCaption.style.display = 'none'
  } else {
    heroCaption.style.display = 'block'
  }
})

// Swiper JS for Slider

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

// cluster price
const cardRooms = document.querySelectorAll('.card')
const bookingBtn = document.querySelectorAll('#rooms .price button')

bookingBtn.forEach(element => {
  element.addEventListener('click',() => alert("On Building \nNot Available for Now !"))
});