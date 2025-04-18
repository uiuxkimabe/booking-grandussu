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
    // create new elemtn list order card
    const roomList = document.querySelector(".room__list ul")
    const createOrder = document.createElement("li")
    createOrder.classList.add("add__room", "d-flex")
    const card = e.target.closest(".card")
    const roomName = card.querySelector(".clusters").innerHTML
    const price = card.querySelector(".price-detail").innerHTML
    createOrder.innerHTML = `
      <div class="room__name">
      <h4>${roomName}</h4>
      <p class="price__room">${price}</p>
      </div>
      <div class="unit__qty">
      <h4>Qty</h4>
      <input type="number" class="form-control" id="qty" value="1" min="1" max="5" step="1" style="text-align: center" />
      </div>
      <div class="total__price">${price}</div>
      <button class="btn btn-danger">❌</button>
    `;

    // Update total price based on quantity
    const qtyInput = createOrder.querySelector("#qty");
    const totalPriceElement = createOrder.querySelector(".total__price");
    qtyInput.addEventListener("input", () => {
      const qty = parseInt(qtyInput.value) || 1;
      const updatedPrice = parseInt(price.replace(/\./g, "")) * qty;
      totalPriceElement.innerHTML = updatedPrice.toLocaleString('id-ID');
    });
    // Eksekusi Di buat list room yang di pesan
    roomList.appendChild(createOrder)

    // total payment
    const totalPayment = document.querySelector(".total__payment")

    // Refresh total payment on button click
    const checkTotalButton = document.querySelector(".checkTotal");
    checkTotalButton.addEventListener("click", () => {
      const updatedPricesArray = Array.from(document.querySelectorAll(".total__price")).map(priceElement => {
      return parseInt(priceElement.innerHTML.replace(/\./g, ""));
      });
      const updatedTotalSum = updatedPricesArray.reduce((acc, curr) => acc + curr, 0);
      totalPayment.innerHTML = `Total : ${updatedTotalSum.toLocaleString('id-ID')}`;
    });

    // Remove order list
    createOrder.querySelector(".btn-danger").addEventListener("click", () => {
      const index = Array.from(roomList.children).indexOf(createOrder);
      arrRoomList.splice(index, 1);
      addNotif.innerHTML = arrRoomList.length;
      e.target.disabled = false;
      e.target.style = "";
      createOrder.remove();

      // Update total payment after removal
      const updatedPricesArray = Array.from(document.querySelectorAll(".total__price")).map(priceElement => {
      return parseInt(priceElement.innerHTML.replace(/\./g, ""));
      });
      const updatedTotalSum = updatedPricesArray.reduce((acc, curr) => acc + curr, 0);
      totalPayment.innerHTML = `Total : ${updatedTotalSum.toLocaleString('id-ID')}`;
    });

  })
});

// function 
document.querySelector('nav .order__list').addEventListener('click',()=> {
  document.querySelector("#popup").classList.toggle("active")
})

document.querySelector('#popup .closePop').addEventListener('click',()=> {
  document.querySelector("#popup").classList.toggle("active")
})
