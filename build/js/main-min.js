$(document).ready(function(){$(".swiper-container"),new Swiper(".swiper-container",{centeredSlides:!0,roundLengths:!0,loop:!0,loopAdditionalSlides:30,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:1,centeredSlides:!1},480:{spaceBetween:0,slidesPerView:1},640:{spaceBetween:0,slidesPerView:3,centeredSlides:!0},992:{spaceBetween:20,slidesPerView:3}}})}),$(document).ready(function(){$(".swiper-container-doctors"),new Swiper(".swiper-container-doctors",{centeredSlides:!0,roundLengths:!0,loop:!0,loopAdditionalSlides:30,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:1,centeredSlides:!1},480:{spaceBetween:0,slidesPerView:1},768:{spaceBetween:0,slidesPerView:3,centeredSlides:!0},992:{spaceBetween:20,slidesPerView:3}}})});let button=document.querySelector(".burger__menu"),menu=document.querySelector(".header__menu-list");button.addEventListener("click",function(e){e.preventDefault(),menu.classList.toggle("show-menu"),button.classList.toggle("is-active")});