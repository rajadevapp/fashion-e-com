// hero slide 
const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".slider-dot");
const nextBtn = document.querySelector(".slider-arrow.next");
const prevBtn = document.querySelector(".slider-arrow.prev");
const slider = document.querySelector(".hero-slider");

let currentSlide = 0;
let sliderTimer;

function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === currentSlide);
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentSlide);
        dot.setAttribute(
            "aria-current",
            i === currentSlide ? "true" : "false"
        );
    });
}

function startSlider() {
    clearInterval(sliderTimer);

    if (!window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches) {
        sliderTimer = setInterval(() => {
            showSlide(currentSlide + 1);
        }, 5000);
    }
}

nextBtn.addEventListener("click", () => {
    showSlide(currentSlide + 1);
    startSlider();
});

prevBtn.addEventListener("click", () => {
    showSlide(currentSlide - 1);
    startSlider();
});

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        showSlide(index);
        startSlider();
    });
});

// Pause automatic movement while the user interacts.
slider.addEventListener("mouseenter", () => {
    clearInterval(sliderTimer);
});

slider.addEventListener("mouseleave", startSlider);

slider.addEventListener("focusin", () => {
    clearInterval(sliderTimer);
});

slider.addEventListener("focusout", (event) => {
    if (!slider.contains(event.relatedTarget)) {
        startSlider();
    }
});

startSlider();