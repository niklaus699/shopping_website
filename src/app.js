// Mobile Menu Toggle
const mobileMenuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");
//Open Menu Toggle
mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
//Close Menu Toggle
closeMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Basket State and Cart Count
const lightBox = document.getElementById("lightBox");
const filledCartDiv = document.getElementById("filledCartDiv");
const emptyCartDiv = document.getElementById("emptyCartDiv");
const addToCartButton = document.getElementById("addToCartButton");
const countDisplay = document.getElementById("countDisplay");
const minusIcon = document.getElementById("minusIcon");
const plusIcon = document.getElementById("plusIcon");
const cartButton = document.getElementById("cartButton");
const cartCountSpan = document.getElementById("cartCount");
const checkoutButtonDiv = document.getElementById("buttonDiv");
const countSpan = document.getElementById("countSpan");
const totalAmount = document.getElementById("totalAmount");
const checkoutButton = document.getElementById("checkoutButton");
const lightBoxClone = document.getElementById("lightBoxClone");
const exitButton = document.getElementById("exitButton");
let cartCount = 0;
const PRICE = 125;
let totalPrice = 0;
checkoutButton.addEventListener("click", (event) => {
  event.stopPropagation();
  lightBox.classList.add("hidden");
  lightBoxClone.classList.remove("hidden");
  cartCount = 0;
  totalPrice = 0;
  updateCartCount(cartCount);
  exitButton.addEventListener("click", () => {
    lightBoxClone.classList.add("hidden");
    window.removeEventListener("click", checkoutButton); // Clean up listener
  });
});

cartButton.addEventListener("click", () => {
  lightBox.classList.toggle("hidden");
  if (cartCount > 0) {
    filledCartDiv.classList.toggle("hidden");
    emptyCartDiv.classList.add("hidden");
    troubleShootingDiv1.classList.add("hidden");
    troubleShootingDiv2.classList.add("hidden");
    troubleShootingDiv3.classList.add("hidden");
    filledCartDiv.classList.remove("hidden");
    checkoutButtonDiv.classList.remove("hidden");
  } else if (cartCount <= 0) {
    filledCartDiv.classList.add("hidden");
    checkoutButtonDiv.classList.add("hidden");
    emptyCartDiv.classList.remove("hidden");
    troubleShootingDiv1.classList.remove("hidden");
    troubleShootingDiv2.classList.remove("hidden");
    troubleShootingDiv3.classList.remove("hidden");
  }
});

minusIcon.addEventListener("click", () => {
  if (cartCount > 0) {
    cartCount--;
  } else {
    cartCount = 0;
  }
  updateCartCount(cartCount);
});

plusIcon.addEventListener("click", () => {
  cartCount += 1;
  updateCartCount(cartCount);
});

// Update the basket count
function updateCartCount(count) {
  if (count <= 0) {
    cartCountSpan.classList.add("hidden");
    countDisplay.textContent = `${count}`;
    countSpan.textContent = `${count}`;
    totalPrice = PRICE * count;
    totalAmount.textContent = `$${totalPrice}.00`;
  } else if (count > 0) {
    cartCountSpan.classList.remove("hidden");
    cartCountSpan.textContent = `${count}`;
    countDisplay.textContent = `${count}`;
    countSpan.textContent = `${count}`;
    totalPrice = PRICE * count;
    totalAmount.textContent = `$${totalPrice}.00`;
  }
}

// Functionality For Mobile Image Gallery
const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");
let images = [
  "./src/assets/image-product-1-thumbnail.jpg",
  "./src/assets/image-product-2-thumbnail.jpg",
  "./src/assets/image-product-3-thumbnail.jpg",
  "./src/assets/image-product-1-thumbnail.jpg",
];

let currentIndex = 0;
const currentImage = document.getElementById("currentImage");
const updateImage = () => {
  currentImage.src = images[currentIndex];
};

previousButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});
const troubleShootingDiv1 = document.getElementById("troubleShootingDiv1");
const troubleShootingDiv2 = document.getElementById("troubleShootingDiv2");
const troubleShootingDiv3 = document.getElementById("troubleShootingDiv3");

addToCartButton.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent the document click from firing immediately
  lightBox.classList.remove("hidden");
  if (cartCount > 0) {
    console.log(cartCount);
    emptyCartDiv.classList.add("hidden");
    troubleShootingDiv1.classList.add("hidden");
    troubleShootingDiv2.classList.add("hidden");
    troubleShootingDiv3.classList.add("hidden");
    filledCartDiv.classList.remove("hidden");
    checkoutButtonDiv.classList.remove("hidden");
  } else if (cartCount < 1) {
    filledCartDiv.classList.add("hidden");
    checkoutButtonDiv.classList.add("hidden");
    emptyCartDiv.classList.remove("hidden");
    troubleShootingDiv1.classList.remove("hidden");
    troubleShootingDiv2.classList.remove("hidden");
    troubleShootingDiv3.classList.remove("hidden");
    console.log(cartCount);
  }
});

// Global click listener to hide the lightBox if the click is outside lightBox and addToCartButton.
// document.addEventListener("click", (event) => {
//   // Check if the click happened outside of the lightBox and the addToCartButton.
//   if (
//     !lightBox.contains(event.target) &&
//     !addToCartButton.contains(event.target)
//   ) {
//     lightBox.classList.add("hidden");
//   }
// });
