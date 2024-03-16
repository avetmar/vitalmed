$(document).ready(function(){
    $('.carousel_inner').slick({
        infinite: true,
        dots: true,
        speed: 1200,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        pauseOnFocus: false
      });
  });

  $(document).ready(function(){
    $('.carousel_advantages').slick({
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        pauseOnFocus: false,
        fade: true,
        cssEase: 'linear'
      });
  });

  $(document).ready(function(){
    $('.carousel_results').slick({
        infinite: true,
        dots: true,
        speed: 1200,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        pauseOnFocus: false
      });
  });