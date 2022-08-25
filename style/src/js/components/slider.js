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

  // Управление клавиатурой
  keyboard: {
    // Вкл/Выкл
    enable: true,
    // Только когда доскролим
    onlyInViewport: true,
    // Управление клавишами pageUp, pageDown
    pageUpDown: true,
  },

  // Управление колесом мыши
  mousewheel: {
    // Чувствительность
    sensitivity: 1,
  },
});

const swiperLogos = new Swiper(".logos__slider", {
  slidesPerView: 4,

  navigation: {
    nextEl: ".logos__btn-next",
    prevEl: ".logos__btn-prev",
  },

  // Управление клавиатурой
  keyboard: {
    // Вкл/Выкл
    enable: true,
    // Только когда доскролим
    onlyInViewport: true,
    // Управление клавишами pageUp, pageDown
    pageUpDown: true,
  },

  // Управление колесом мыши
  mousewheel: {
    // Чувствительность
    sensitivity: 1,
  },
});
