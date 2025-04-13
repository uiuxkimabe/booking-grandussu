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

// Class untuk Harga Kamar sesuai type

// cluster price
// all rooms
const cardRooms = document.querySelectorAll(".card");
const stdRooms = document.querySelectorAll(".standard");
const deluxeRooms = document.querySelectorAll(".deluxe");
const superiorRooms = document.querySelectorAll(".superior");
const cottageRooms = document.querySelectorAll(".cottage");

// all price
const price = document.querySelectorAll(".price-detail");

// Add Function ketika card di tutup semua (full book)

function fullBookedNotif() {
  return alert(
    "Online Booking Via Website are Fully Booked. Please Check Availability Through a Travel Agent"
  );
}

cardRooms.forEach((element) => {
  element.addEventListener("click", () => fullBookedNotif());
});


class Rate {
  constructor() {
    this.standard = 550000;
    this.deluxe = 750000;
    this.superior = 650000;
    this.cottage = 2200000;
  }
  // Method Harga Kamar Standard
  standardPrice() {
    const rooms = cardRooms.forEach((element) => {
      if (element.classList.contains("standard")) {
        price.forEach((e) => {
          const priceCluster = e.classList.contains("stdPrice");
          let resultPrice;
          if (priceCluster) {
            resultPrice = this.standard;
            e.innerHTML = resultPrice.toLocaleString("id-ID");
          }
        });
      }
    });
    return rooms;
  }
  // Method Harga Kamar Deluxe
  deluxePrice() {
    const rooms = cardRooms.forEach((element) => {
      if (element.classList.contains("deluxe")) {
        price.forEach((e) => {
          const priceCluster = e.classList.contains("dlxPrice");
          let resultPrice;
          if (priceCluster) {
            resultPrice = this.deluxe;
            e.innerHTML = resultPrice.toLocaleString("id-ID");
          }
        });
      }
    });
    return rooms;
  }
  // Method Harga Kamar Superior
  superiorPrice() {
    const rooms = cardRooms.forEach((element) => {
      if (element.classList.contains("superior")) {
        price.forEach((e) => {
          const priceCluster = e.classList.contains("sprPrice");
          let resultPrice;
          if (priceCluster) {
            resultPrice = this.superior;
            e.innerHTML = resultPrice.toLocaleString("id-ID");
          }
        });
      }
    });
    return rooms;
  }
  // Method Harga Kamar Cottage
  cottagePrice() {
    const rooms = cardRooms.forEach((element) => {
      if (element.classList.contains("cottage")) {
        price.forEach((e) => {
          const priceCluster = e.classList.contains("ctgPrice");
          let resultPrice;
          if (priceCluster) {
            resultPrice = this.cottage;
            e.innerHTML = resultPrice.toLocaleString("id-ID");
          }
        });
      }
    });
    return rooms;
  }
}

// Standard Rooms
const rose = new Rate();
rose.standardPrice();

// Deluxe Rooms
const catalya = new Rate();
catalya.deluxePrice();
const lily = new Rate();
lily.deluxePrice();

// Superior Rooms
const bougenville = new Rate();
bougenville.superiorPrice();
const eforbia = new Rate();
eforbia.superiorPrice();
const garbella = new Rate();
garbella.superiorPrice();
const crysant = new Rate();
crysant.superiorPrice();

// Cottage Rooms
const anggrek = new Rate();
anggrek.cottagePrice();
const tulip = new Rate();
tulip.cottagePrice();

// Filter Cottage
function filterCard(type) {
  cardRooms.forEach((card) => {
    if (type === "all" || card.classList.contains(type)) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
}

// Button Open Form
const formHighlight = document.querySelector("#popup");
const formBooking = document.querySelector("#popup form");
const cardBtn = document.querySelectorAll(".card button");

cardBtn.forEach((button) => {
  // Ambil Cluster Type pada Form yang Akan diisi Otomatis
  const clusterType = document.getElementById("clusterType");
  const clusterPrice = document.getElementById("clusterPrice");

  button.addEventListener("click", (event) => {
    formHighlight.classList.add("hidden");
    setTimeout(() => {
      formBooking.classList.add("hidden");
    }, 500);
    autoCode();
    // Dapatkan kartu induk dari tombol yang diklik
    const card = event.target.closest(".card");
    // Ambil elemen cluster dari kartu
    const clusterName = card.querySelector(".clusters");
    const clusterSelectPrice = card.querySelector(".price-detail");

    if (clusterName) {
      // Tampilkan nama cluster dari kartu yang diklik
      clusterType.value = clusterName.textContent;
      clusterPrice.value = `${clusterSelectPrice.textContent}`;
    }
  });
});

// Close Form
function closeForm() {
  formBooking.classList.remove("hidden");
  setTimeout(() => {
    formHighlight.classList.remove("hidden");
  }, 500);
}

// Random ID Booking
function autoCode() {
  document.getElementById("idBooking").value = `GUHC-${Math.floor(
    Math.random() * 1e9
  )}`;
}

// Check Out Button
const checkOutBtn = document.querySelector("#popup .checkOutBtn");
const formInput = document.querySelectorAll("#popup form input");

formInput[6].addEventListener("input", () => {
  checkOutBtn.removeAttribute("disabled");
  checkOutBtn.style.background = "rgb(209, 19, 136)";
});

// Form Booking
const scriptURL =
  "https://script.google.com/macros/s/AKfycby0_Tx77qc4EHt9Ae36nSl4HDtassJBMjWienVAFyjtjb0uwdwsI4vtoLdCdLwXWTq9/exec";
const form = document.forms["submit-to-google-sheet"];

checkOutBtn.addEventListener("click", (e) => {
  e.preventDefault();
  closeForm();
  const text = encodeURIComponent(message());
  window.open(`https://wa.me/6281280010003?text=${text}`);
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // reset form
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

function message() {
  const label = [
    "IDBooking",
    "Cluster Type",
    "Customer Name",
    "Pax",
    "Check In",
    "Check Out",
    "Phone",
    "Note",
    "Total Price",
  ];

  const data = label.map((label, i) => `${label}: ${form[i].value}`).join("\n");

  return `Hi Grand Ussu, I've Booking By Website Please Check My Order\n\nData Customer\n${data}\n\nThank You!!!\n*)Room Only`;
}

// Date
const disableDate = () => {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  return `${year}-${month}-${day}`;
};

document.querySelectorAll(".datePicker").forEach((element) => {
  element.setAttribute("min", disableDate());
  element.setAttribute("value", disableDate());
});
