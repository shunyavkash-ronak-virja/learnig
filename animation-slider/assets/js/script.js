document.addEventListener("DOMContentLoaded", function () {
  // Main slider
  var main = new Splide(".splide", {
    type: "fade",
    autoplay: true,
    perPage: 1,
    pagination: false,
    cover: true,
    drag: false,
    interval: 4500,
    arrows: false,
  });

  // Thumbnail slider
  var thumbnails = new Splide("#thumbnails", {
    type: "loop",
    drag: false,
    autoplay: true,
    rewind: true,
    fixedWidth: 104,
    fixedHeight: 58,
    isNavigation: true,
    perPage: 2,
    gap: 10,
    pagination: false,
    cover: true,
    dragMinThreshold: {
      mouse: 4,
      touch: 10,
    },
    breakpoints: {
      1023: {
        perPage: 1,
      },
      640: {
        fixedWidth: 66,
        fixedHeight: 38,
      },
    },
  });

  main.sync(thumbnails);
  main.mount();
  thumbnails.mount();
});
