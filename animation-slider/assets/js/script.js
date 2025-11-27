document.addEventListener("DOMContentLoaded", function () {
  // Main slider
  var main = new Splide(".fruit-slider.splide", {
    type: "fade",
    // autoplay: true,
    perPage: 1,
    pagination: false,
    drag: false,
    interval: 4500,
    arrows: false,
  });

  // Thumbnail slider
  var thumbnails = new Splide(".thumbnails-slider", {
    type: "loop",
    drag: false,
    // autoplay: true,
    isNavigation: true,
    perPage: 2,
    gap: 20,
    pagination: false,
    breakpoints: {
      1023: {
        perPage: 1,
      },
    },
  });

  main.sync(thumbnails);
  main.mount();
  thumbnails.mount();
});
