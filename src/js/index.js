const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");
const pageBody = document.querySelector("body");
const menuPeople = document.querySelector(
  ".mobile-menu__item[data-tab='people']"
);
const menuBussines = document.querySelector(
  ".mobile-menu__item[data-tab='bussines']"
);
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);

    const targetId = target.id;
    if (targetId === "people") {
      pageBody.classList.add("js-people");
      pageBody.classList.remove("js-bussines");
    }
    if (targetId === "bussines") {
      pageBody.classList.remove("js-people");
      pageBody.classList.add("js-bussines");
    }
    console.log(targetId);
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

  spaceBetween: 66,
  breakpoints: {
    500: {
      spaceBetween: 115,
    },
  },
  scrollbar: {
    el: ".history__slider .swiper-scrollbar",
    hide: false,
    draggable: true,
  },
});

var swiper = new Swiper(".table-content__scroll", {
  slidesPerView: "auto",
  freeMode: true,
  scrollbar: {
    el: ".table-content__scroll .swiper-scrollbar",
    hide: false,
    draggable: true,
  },
});

const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile-menu");
if (burger) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("js-active");
    pageBody.classList.toggle("js-hidden");
    if (mobileMenu) mobileMenu.classList.toggle("js-active");
  });
}

const mobileButtons = document.querySelectorAll(
  ".footer-inner-right__item .list-title"
);
if (mobileButtons.length > 0) {
  mobileButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("js-active");
      btn.nextElementSibling.classList.toggle("js-active");
    });
  });
}
