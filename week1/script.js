"use strict";

// Image data
const images = [
  {
    fullSize: "../week1/images/christian-joudrey-9bdt03k4ujw-unsplash.jpg",
    thumbnail: "../week1/images/christian-joudrey-9bdt03k4ujw-unsplash.jpg",
    caption: "The first and the foremost image in this gallery",
  },
  {
    fullSize: "../week1/images/jake-blucker-tMzCrBkM99Y-unsplash.jpg",
    thumbnail: "../week1/images/jake-blucker-tMzCrBkM99Y-unsplash.jpg",
    caption: "Mesmerizing Sci-fi looking cube",
  },
  {
    fullSize: "../week1/images/johan-mouchet-Z95viY3WaZs-unsplash.jpg",
    thumbnail: "../week1/images/johan-mouchet-Z95viY3WaZs-unsplash.jpg",
    caption: "Local image",
  },
  {
    fullSize: "../week1/images/patrick-reichboth-xmQBaCtgUP4-unsplash.jpg",
    thumbnail: "../week1/images/patrick-reichboth-xmQBaCtgUP4-unsplash.jpg",
    caption: "Mesmerizing Sci-fi looking cube",
  },
  {
    fullSize: "../week1/images/robert-lukeman-_RBcxo9AU-U-unsplash.jpg",
    thumbnail: "../week1/images/robert-lukeman-_RBcxo9AU-U-unsplash.jpg",
    caption: "Good looking leaves in the forest",
  },
  {
    fullSize: "../week1/images/johan-mouchet-Z95viY3WaZs-unsplash.jpg",
    thumbnail: "../week1/images/johan-mouchet-Z95viY3WaZs-unsplash.jpg",
    caption: "A wonderful work of art",
  },
];

const galleryContainer = document.querySelector(".gallery-container");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const captionView = document.querySelector(".caption");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const closeBtn = document.querySelector(".close");

let currentIndex = 0;

// Create thumbnail elements
images.forEach((image, index) => {
  const imgElement = document.createElement("img");
  imgElement.src = image.thumbnail;
  imgElement.alt = image.caption;
  imgElement.classList.add("thumbnail");
  imgElement.dataset.index = index;
  galleryContainer.appendChild(imgElement);
});

// Open lightbox
const openLightbox = (index) => {
  currentIndex = index;
  lightboxImage.src = images[currentIndex].fullSize;
  captionView.textContent = images[currentIndex].caption;
  lightbox.classList.remove("hidden");
  updateButtons();
};

// Close lightbox
const closeLightbox = () => {
  lightbox.classList.add("hidden");
};

// Update buttons state
const updateButtons = () => {
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === images.length - 1;
};

// Event listeners
galleryContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("thumbnail")) {
    openLightbox(parseInt(e.target.dataset.index, 10));
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < images.length - 1) {
    openLightbox(currentIndex + 1);
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    openLightbox(currentIndex - 1);
  }
});

closeBtn.addEventListener("click", closeLightbox);

// Close lightbox when clicking outside the image
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});
