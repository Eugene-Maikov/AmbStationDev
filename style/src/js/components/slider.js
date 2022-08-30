// Подключение свайпера
import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper(".substations__slider", {
  slidesPerView: 3,
  spaceBetween: 25,

  navigation: {
    nextEl: ".substations__btn-next",
    prevEl: ".substations__btn-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

const swiperLogos = new Swiper(".logos__slider", {
  slidesPerView: 4,

  navigation: {
    nextEl: ".logos__btn-next",
    prevEl: ".logos__btn-prev",
  },
});
