const slideshow = document.querySelector("#slideshow");
const images = slideshow.getElementsByTagName("img");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let currentSlideIndex = 0;

function showSlide(index) {
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    images[index].style.display = "block";
}

prevBtn.addEventListener("click", () => {
    currentSlideIndex = (currentSlideIndex - 1 + images.length) % images.length;
    showSlide(currentSlideIndex);
});

nextBtn.addEventListener("click", () => {
    currentSlideIndex = (currentSlideIndex + 1) % images.length;
    showSlide(currentSlideIndex);
});

showSlide(currentSlideIndex);