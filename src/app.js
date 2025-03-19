    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('menuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');
    //Open Menu Toggle
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    //Close Menu Toggle
    closeMenu.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    }
    );

    // Basket State and Cart Count
    const lightBox = document.getElementById('lightBox');
    const filledCartDiv = document.getElementById('filledCartDiv');
    const emptyCartDiv  = document.getElementById('emptyCartDiv');
    const addToCartButton = document.getElementById('addToCartButton');
    const countDisplay = document.getElementById('countDisplay');
    const minusIcon = document.getElementById('minusIcon');
    const plusIcon = document.getElementById('plusIcon');
    const cartButton = document.getElementById('cartButton');
    const cartCountSpan = document.getElementById('cartCount');
    let cartCount = 0;

    cartButton.addEventListener('click', () => {
        if (cartCount > 0) {
          lightBox.classList.toggle('hidden');
          filledCartDiv.classList.toggle('hidden');
        }
        else if (cartCount <= 0) {
          lightBox.classList.toggle('hidden');
          emptyCartDiv.classList.toggle('hidden');
        }
    });

    minusIcon.addEventListener('click', () => {
      if (cartCount > 0) {
        cartCount--;
      }
      else{
        cartCount = 0;
      }
      updateCartCount(cartCount)
    })

    plusIcon.addEventListener('click', () => {
      cartCount += 1;
      updateCartCount(cartCount)
    })

    // Update the basket count
    function updateCartCount(count) {
      if (count <= 0) {
        cartCountSpan.classList.add('hidden');
        countDisplay.textContent = `${count}`;
      } else if (count > 0) {
        cartCountSpan.classList.remove('hidden');
        cartCountSpan.textContent = `${count}`;
        countDisplay.textContent = `${count}`;
      }
    }

    // Functionality For Mobile Image Gallery
    const previousButton = document.getElementById('previousButton');
    const nextButton = document.getElementById('nextButton');
    let images = [
      './src/assets/image-product-1-thumbnail.jpg',
      './src/assets/image-product-2-thumbnail.jpg',
      './src/assets/image-product-3-thumbnail.jpg',
      './src/assets/image-product-1-thumbnail.jpg'
      ];

    let currentIndex = 0;
    const currentImage = document.getElementById('currentImage');
    const updateImage = () => {
      currentImage.src = images[currentIndex];
      };
      
    previousButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateImage();
    });
    
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateImage();
    });

    addToCartButton.addEventListener('click', () => {
      if(lightBox.classList.contains('hidden')){
        lightBox.classList.toggle('hidden');
        if(cartCount > 0){
          emptyCartDiv.classList.add('hidden');
          filledCartDiv.classList.remove('hidden');
        }
        else if (cartCount < 1) {
          filledCartDiv.classList.add('hidden');
          emptyCartDiv.classList.remove('hidden');
        }
      }
    })

    