// Array de imágenes para el slider
const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg"
  ];
  
  let currentImageIndex = 0;
  const sliderImage = document.getElementById("image-slider");
  const previousBtn = document.getElementById("prev-button");
  const nextBtn = document.getElementById("next-button");
  const toggleBtn = document.getElementById("toggle-btn");
  const galleryContainer = document.getElementById("gallery-container");
  const sliderContainer = document.getElementById("slider-container");
  
  // Función para actualizar la imagen actual en el slider
  function updateSliderImage() {
    const imagePath = images[currentImageIndex];
    sliderImage.src = imagePath;
  }
  
  // Evento click para el botón "anterior"
  previousBtn.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateSliderImage();
  });
  
  // Evento click para el botón "siguiente"
  nextBtn.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateSliderImage();
  });
  
 // Evento click para el botón de alternar vista
toggleBtn.addEventListener("click", () => {
    if (galleryContainer.style.display === "none") {
      galleryContainer.style.display = "flex";
      sliderContainer.style.display = "none";
    } else {
      galleryContainer.style.display = "none";
      sliderContainer.style.display = "flex";
    }
  });
  