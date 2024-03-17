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

  $('#consult form').validate({
    rules: {
      name: "required",
      phone: "required",
      check: "required"
    },
    messages: {
      name: "Пожалуйста введите свое имя",
      phone: "Пожалуйста введите свой номер",
      check: "*"
    }
  });

  $('input[name=phone]').mask("+374 (99) 99-99-99");

  $('form').submit(function(e) {
    e.preventDefault();

    if (!$(this).valid()) {
      return;
    }

    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      $('.overlay').fadeIn('slow');

      $('form').trigger('reset')
    });
    return false;
  });

  // modal window
  // $('[data-modal=thanks]').on('click', function() {
  //   $('.overlay').fadeIn('slow');
  // });

  $('.modal_close').on('click', function() {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });

  $("a[href^='#']").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });

  new WOW().init();
  
});
