document.addEventListener("DOMContentLoaded", function() {
    const carouselList = document.querySelector(".carousel .list");
    const items = document.querySelectorAll(".carousel .item");
    const prevButton = document.querySelector(".arrows .prev");
    const nextButton = document.querySelector(".arrows .next");

    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * items[0].offsetWidth;
        carouselList.style.transform = `translateX(${offset}px)`;
    }

    nextButton.addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    prevButton.addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });
});
