// Swiper JS for Slider

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// class for room
const roomName = document.querySelectorAll(".card .clusters")
const price = document.querySelectorAll(".card .price-detail")

// Data Rooms 
const roomsData = [
  {
    name: "Cluster Rose",
    price: 550000,
  },
  {
    name: "Cluster Catalya",
    price: 750000,
  },
  {
    name: "Cluster Bougenville",
    price: 650000,
  },
  {
    name: "Cluster Eforbia",
    price: 650000,
  },
  {
    name: "Cluster Garbella",
    price: 650000,
  },
  {
    name: "Cluster Crysant",
    price: 650000,
  },
  {
    name: "Cluster Lily",
    price: 750000,
  },
  {
    name: "Cluster Anggrek",
    price: 1100000,
  },
  {
    name: "Cluster Tulip",
    price: 1100000,
  },
]

class Room {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  // Methode
  cardMethode(params) {
    roomName[params].innerHTML = this.name;
    price[params].innerHTML = this.price.toLocaleString('id-ID')
  }
}

// instance of room class
roomsData.forEach((data, index) => {
  const rooms = new Room(data.name, data.price);
  rooms.cardMethode(index);
});

// Order Btn
const orderBtn = document.querySelectorAll(".price button");
let arrRoomList = []
orderBtn.forEach(element => {
  const addNotif = document.querySelector(".addList")
  let count = 0;
  let result = count + 1;
  count++
  element.addEventListener('click', (e) => {
    e.target.disabled = true;
    e.target.style = "background-color: rgb(177,177,177)"
    arrRoomList.push(result)
    addNotif.innerHTML = arrRoomList.length;
    console.info(count)
    makeOrder()
    document.querySelector("#popup").classList.toggle("active")
  })
});

// function 
function makeOrder() {
  const roomList = document.querySelector(".room__list ul")
  const createOrder = document.createElement("li")
  createOrder.classList.add("add__room", "d-flex")
  createOrder.innerHTML = `
    <div class="room__name">
      <h4>Cluster Rose</h4>
      <p class="price__room">Rp. 550.000</p>
    </div>
    <div class="unit__qty">
      <input type="number" class="form-control" id="qty" value="1" min="1" max="10">
    </div>
    <span class="total__price">Rp. 550.000</span>
    <button class="btn btn-danger">X</button>
  `
  roomList.appendChild(createOrder)
}

