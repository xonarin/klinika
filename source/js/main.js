//Slider

jQuery(document).ready(function() {
  // Assign some jquery elements we'll need
  var $swiper = $(".swiper-container");
  var $bottomSlide = null; // Slide whose content gets 'extracted' and placed
  // into a fixed position for animation purposes
  var $bottomSlideContent = null; // Slide content that gets passed between the
  // panning slide stack and the position 'behind'
  // the stack, needed for correct animation style

  var mySwiper = new Swiper(".swiper-container", {

    centeredSlides: true,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      centeredSlides: false
    },
    480: {
      spaceBetween: 0,
      slidesPerView: 1
    },
    // when window width is >= 640px
    640: {
      spaceBetween: 0,
      slidesPerView: 3,
      centeredSlides: true
    },

    992: {
      spaceBetween: 20,
      slidesPerView: 3,
    }
  }
  });
});

jQuery(document).ready(function() {
  // Assign some jquery elements we'll need
  var $swiper = $(".swiper-container-doctors");
  var $bottomSlide = null; // Slide whose content gets 'extracted' and placed
  // into a fixed position for animation purposes
  var $bottomSlideContent = null; // Slide content that gets passed between the
  // panning slide stack and the position 'behind'
  // the stack, needed for correct animation style

  var mySwiper = new Swiper(".swiper-container-doctors", {

    centeredSlides: true,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      centeredSlides: false
    },
    480: {
      spaceBetween: 0,
      slidesPerView: 1
    },
    // when window width is >= 640px
    768: {
      spaceBetween: 0,
      slidesPerView: 3,
      centeredSlides: true
    },

    992: {
      spaceBetween: 20,
      slidesPerView: 3,
    }
  }
  });
});




//Menu
let button = document.querySelector(".burger__menu");
let menu = document.querySelector(".header__menu-list");

button.addEventListener('click', function(evt){
    evt.preventDefault();
    menu.classList.toggle("show-menu");
    button.classList.toggle("is-active");
})