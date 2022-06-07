var swiper = new Swiper(".slider-container", {
  autoplay: {
   delay: 10000,
 },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation:{
    nextEl:'.swiper-button-next',
    prevEl:'.swiper-button-prev',
  }
});
