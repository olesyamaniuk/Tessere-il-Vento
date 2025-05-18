$(function () {
  $(".e-a-why-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,

    cssEase: "linear",
    prevArrow: ".e-a-why-list-left",
    nextArrow: ".e-a-why-list-right",
  });
});
