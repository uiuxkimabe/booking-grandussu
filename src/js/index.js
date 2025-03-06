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

// Class untuk Harga Kamar sesuai type

// cluster price
// all rooms
const cardRooms = document.querySelectorAll('.card')
const stdRooms = document.querySelectorAll('.standard')
const deluxeRooms = document.querySelectorAll('.deluxe')
const superiorRooms = document.querySelectorAll('.superior')
const cottageRooms = document.querySelectorAll('.cottage')

// all price
const price = document.querySelectorAll('.price-detail')

class Rate {
  constructor() {
    this.standard = 550000;
    this.deluxe = 750000;
    this.superior = 650000;
    this.cottage = 1100000;
  }
  // Method Harga Kamar Standard
  standardPrice() {
    const rooms = cardRooms.forEach(element => {
      if (element.classList.contains('standard')) {
        price.forEach(e => {
          const priceCluster = e.classList.contains('stdPrice')
          let resultPrice;
          if (priceCluster) {
            resultPrice = this.standard
            e.innerHTML = resultPrice.toLocaleString('id-ID')
          }
        });
      }
    });
    return rooms
  }
  // Method Harga Kamar Deluxe
  deluxePrice() {
    const rooms = cardRooms.forEach(element => {
      if (element.classList.contains('deluxe')) {
        price.forEach(e => {
          const priceCluster = e.classList.contains('dlxPrice')
          let resultPrice;
          if (priceCluster) {
            resultPrice = this.deluxe
            e.innerHTML = resultPrice.toLocaleString('id-ID')
          }
        });
      }
    });
    return rooms
  }
  // Method Harga Kamar Superior
  superiorPrice() {
    const rooms = cardRooms.forEach(element => {
      if (element.classList.contains('superior')) {
        price.forEach(e => {
          const priceCluster = e.classList.contains('sprPrice')
          let resultPrice
          if (priceCluster) {
            resultPrice = this.superior
            e.innerHTML = resultPrice.toLocaleString('id-ID')
          }
        });
      }
    });
    return rooms
  }
  // Method Harga Kamar Cottage
  cottagePrice() {
    const rooms = cardRooms.forEach(element => {
      if (element.classList.contains('cottage')) {
        price.forEach(e => {
          const priceCluster = e.classList.contains('ctgPrice')
          let resultPrice
          if (priceCluster) {
            resultPrice = this.cottage
            e.innerHTML = resultPrice.toLocaleString('id-ID')
          }
        });
      }
    });
    return rooms
  }
}

// Standard Rooms
const rose = new Rate();
rose.standardPrice()

// Deluxe Rooms
const catalya = new Rate();
catalya.deluxePrice()

// Superior Rooms
const bougenville = new Rate();
bougenville.superiorPrice()
const eforbia = new Rate();
eforbia.superiorPrice()
const garbella = new Rate();
garbella.superiorPrice()
const crysant = new Rate();
crysant.superiorPrice()

// Cottage Rooms
const lily = new Rate();
lily.cottagePrice()
const anggrek = new Rate();
anggrek.cottagePrice()
const tulip = new Rate();
tulip.cottagePrice()

