var swiper = new Swiper(".slider-container", {
  loop: true,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
       return '<span class="' + className + '">' + (index + 1) + "</span>";
    }
  },
  speed : 1500,
  navigation:{
    nextEl:'.swiper-button-next',
    prevEl:'.swiper-button-prev',
  }
});
