const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    target.classList.add("active");
  });
});

// sliders
var swiper = new Swiper(".news-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

var news = new Swiper(".inside-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
  navigation: {
    nextEl: ".inside-slider .swiper-button-next",
    prevEl: ".inside-slider .swiper-button-prev",
  },
});

var swiper = new Swiper(".history__slider", {
  slidesPerView: "auto",
  spaceBetween: 115,
  scrollbar: {
    el: ".history__slider .swiper-scrollbar",
    hide: false,
    draggable: true,
  },
});
