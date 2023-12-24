$(document).ready(function(){
  // $(".nav").on("click","a", function (event) {
  //   //отменяем стандартную обработку нажатия по ссылке
  //   event.preventDefault();

  //   //забираем идентификатор бока с атрибута href
  //   var id  = $(this).attr('href'),

  //   //узнаем высоту от начала страницы до блока на который ссылается якорь
  //     top = $(id).offset().top;
    
  //   //анимируем переход на расстояние - top за 1500 мс
  //   $('body,html').animate({scrollTop: top - 130}, 1500);
  // });

  $(function() {
    var marquee = $("#marquee"); 
    marquee.css({"overflow": "hidden", "width": "100%"});
    marquee.wrapInner("<span>");
    marquee.find("span").css({ "width": "50%", "display": "inline-block", "text-align":"center" }); 
    marquee.append(marquee.find("span").clone());
    marquee.wrapInner("<div>");
    marquee.find("div").css("width", "200%");
    var reset = function() {
      $(this).css("margin-left", "0%");
      $(this).animate({ "margin-left": "-100%" }, 12000, 'linear', reset);
    };
    reset.call(marquee.find("div"));
  });

  if ($(window).width() > 1100) {
    $(".services-item").hover(
      function() {
        var video = $(this).find("video")[0];
        if (video) {
          video.play();
        }
      },
      function() {
        var video = $(this).find("video")[0];
        if (video) {
          video.pause();
        }
      }
    );
  } else if ($(window).width() <= 600) {
    $(".services-item").click(function() {
      // Используем метод toggle() для скрытия/раскрытия блока
      $(this).find('.content').slideToggle();
    });
  }

  $('.portfolio-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    dots: false,
    arrows: false
  });

  $('.section-popup-preview-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
  });

  $(".project-preview-trigger").click(function() {
    $('body').addClass('project-preview-popup');
  });

  $(".close").click(function() {
    $('body').removeClass('project-preview-popup');
  });

  $(".mob-menu-trigger").click(function() {
    $('header').toggleClass('header-menu');
  });

});