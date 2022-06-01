// $('.acc-head').click(function() {
//   $('.acc-head').removeClass('active');
//   $(this).toggleClass('active');
// });

// $('.btn-find').click(function() {
//   $('header').toggleClass('open_find');
// });

// $('.menu_trigger').click(function() {
//   $('header').toggleClass('open_menu');
// });

$('.btn-trigger').click(function() {
  $('header').toggleClass('open-menu');
});


$('.events-slider').slick({
  arrows: true,
  infinite: true,
  slidesToShow: 1,
  centerMode: false,
  variableWidth: true,
  prevArrow: $('.section-events .prev'),
  nextArrow: $('.section-events .next'),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

 $('.team-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.team-slider-nav'
});

$('.team-slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.team-slider',
  dots: false,
  centerMode: false,
  arrows: true,
  focusOnSelect: true
});

$('.reviews-slider').slick({
  arrows: true,
  infinite: true,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 550,
      settings: {
        variableWidth: true,
        slidesToShow: 1
      }
    }
  ]
});

$('.video-slider').slick({
  arrows: true,
  infinite: true,
  slidesToShow: 1
});

if ($(window).width() < 1100) {
  $('.books-slider').slick({
    arrows: true,
    infinite: true,
    slidesToShow: 2,
    prevArrow: $('.section-books .prev'),
    nextArrow: $('.section-books .next'),
    responsive: [
      {
        breakpoint: 550,
        settings: {
          variableWidth: true
        }
      }
    ]
  });
  $('.blog-slider').slick({
    arrows: true,
    infinite: true,
    slidesToShow: 2,
    prevArrow: $('.section-blog .prev'),
    nextArrow: $('.section-blog .next'),
    responsive: [
      {
        breakpoint: 550,
        settings: {
          variableWidth: true
        }
      }
    ]
  });
  $('.card-slider').slick({
    arrows: true,
    infinite: true,
    slidesToShow: 2
  });
}
else {
   // alert('More than 960');
}


var header = $(".header-home");
var scrollChange = 25;
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= scrollChange) {
        header.addClass('header-bg');
    } else {
        header.removeClass("header-bg");
    }
});


$('.reviews-slider .play').click(function() {
  $(this).closest('.slide').addClass('video-active');
  $(this).siblings('video').get(0).play();
});

$('.reviews-slider .pause').click(function() {
  $(this).closest('.slide').removeClass('video-active');
  $(this).siblings('video').get(0).pause();
});

$(function(){
  var $text = "Перестаньте бороться с жизнью, доверьтесь ее великим планам на вас. Научитесь решать причины проблем, а не их последствия.";
  var $count = 0;
  var $maxspeed = 200;

  function character(start, end, text) {
    return text.substring(start,end);
  }

  function type() {
    var $random = Math.floor(Math.random()* $maxspeed);
    setTimeout(type, $random);
    $('.type-text').append(character($count, $count+1, $text));
    $count++;
  }
  type();
});


$(document).ready(function () {
  var offset = 600;
  $(window).scroll(function(){
    var scrolltop = $(this).scrollTop();
    $('.count-need').each(function(){
      if(scrolltop >= $(this).offset().top - offset) {
        $('.count-need').each(function () {
          $(this).prop('Counter',0).animate({
          Counter: $(this).text()
          }, {
          duration: 5000,
          easing: 'swing',
          step: function (now) {
          $(this).text(Math.ceil(now));
          }
          });
          $(this).removeClass('count-need');
        });
      }
    });
  });
});


$(document).ready(function () {
  var offset = 600;
  $(window).scroll(function(){
    var scrolltop = $(this).scrollTop();
    $('.count-need').each(function(){
      if(scrolltop >= $(this).offset().top - offset) {
        $('.count-need').each(function () {
          $(this).prop('Counter',0).animate({
          Counter: $(this).text()
          }, {
          duration: 5000,
          easing: 'swing',
          step: function (now) {
          $(this).text(Math.ceil(now));
          }
          });
          $(this).removeClass('count-need');
        });
      }
    });
  });
});

$(function(){
    $(".go-top").bind('click', function(e){
        e.preventDefault();
        $('body,html').animate({scrollTop: 0}, 1000);    
    });
});