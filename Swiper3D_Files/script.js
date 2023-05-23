var LPSlider = new Swiper('.lp-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,

  loop: true,
  speed: 2500,
    autoplay: {
        delay: 0,
    },
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 5,
    stretch: 0,
    depth: 50,
    modifier: 2.5,
  },

});