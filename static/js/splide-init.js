document.addEventListener('DOMContentLoaded', function () {
  new Splide('.splide', {
    type: 'loop',
    autoplay: true,
    interval: 6000,
    speed: 550,
  }).mount();
});
