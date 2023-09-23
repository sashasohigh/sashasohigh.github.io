// $(document).ready(function(){
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
// });


jQuery(function($) {
  $('.select2').select2({
      allowClear: true
  });

  $('.reviews-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false
  });

  $(".section-home-8 .container .wrapper .left .buttons .btn-prev").click(function () {
    $(".reviews-slider").slick("slickPrev");
  });

  $(".section-home-8 .container .wrapper .left .buttons .btn-next").click(function () {
    $(".reviews-slider").slick("slickNext");
  });

  $('.input-wrapper').each(function() {
    if ($(this).find('input').val()) {
      $(this).addClass('fill');
    }
    $(this).find('input').change(function() {
      if (!$(this).val()) {
        $(this).parent().removeClass('fill');
      } else {
        $(this).parent().addClass('fill');
      }
    });
  });

  function table_slider() {
    const $sliderTable = $(".table-home");
    const $slides = $sliderTable.find(".slide");
    const $slides_count = $('.table-home .table-body tr:first-child td').length;
    const numVisibleSlides = 5;

    let currentIndex = 0;
    function showSlide() {
      $slides.removeClass("active");
      $(".table-home tr").each(function( index ) {
        $(this).find('.slide').slice(currentIndex, currentIndex + numVisibleSlides).addClass("active");
        $(this).find('.slide').slice(currentIndex, currentIndex + numVisibleSlides).addClass("active");
      });
    }

    $("#table_prev").click(function() {
      if (currentIndex > 0) {
        currentIndex--;
        showSlide();
      }
    });

    $("#table_next").click(function() {
      if (currentIndex < $slides_count - numVisibleSlides) {
        currentIndex++;
        showSlide();
      } 
    });
  }

  table_slider();

  $('.section-home-1 .container .wrapper .right .box-wrapper .box-big').on('click', function() {
    $('.section-home-1 .container .wrapper .right .box-wrapper').toggleClass('active');
    if ($('.section-home-1 .container .wrapper .right .box-wrapper').hasClass('active')) {
      $('.section-home-1 .container .wrapper .right .box-wrapper .box-has-line').addClass('hover');
    } else {
      $('.section-home-1 .container .wrapper .right .box-wrapper .box-has-line').removeClass('hover');
    }
  } );

  function animate_blocks(){
    if (!$('.section-home-1 .container .wrapper .right .box-wrapper').hasClass('active')) {
      var blocks = $(".section-home-1 .container .wrapper .right .box-wrapper .box-has-line");
      var randomIndex = Math.floor(Math.random() * blocks.length);
      var randomBlock = blocks.eq(randomIndex);
      // randomBlock.css("background-color", "blue");
      if (randomBlock.hasClass('box-6-6')) {
        $('.section-home-1 .container .wrapper .right .box-wrapper .box.box-5-6').addClass('hover');
        randomBlock.addClass('hover');
        setTimeout(function() {
          randomBlock.removeClass('hover');
          $('.section-home-1 .container .wrapper .right .box-wrapper .box.box-5-6').removeClass('hover');
        }, 3000);
      } else if (randomBlock.hasClass('box-6-1')) {
      $('.section-home-1 .container .wrapper .right .box-wrapper .box.box-5-2').addClass('hover');
      randomBlock.addClass('hover');
      setTimeout(function() {
        randomBlock.removeClass('hover');
        $('.section-home-1 .container .wrapper .right .box-wrapper .box.box-5-2').removeClass('hover');
      }, 3000);
      } else {
        randomBlock.addClass('hover');
        setTimeout(function() {
          randomBlock.removeClass('hover');
        }, 3000);
      }
    }
  }
  setInterval( animate_blocks, 5000 );

  $('.section-home-1 .container .wrapper .right .box-wrapper .box-6-1').hover(
    function() {
      $('.section-home-1 .container .wrapper .right .box-wrapper .box.box-5-2').addClass('hover');
    }, function() {
      $('.section-home-1 .container .wrapper .right .box-wrapper .box.box-5-2').removeClass('hover');
    }
  );

  $('.section-home-1 .container .wrapper .right .box-wrapper .box-6-6').hover(
    function() {
      $('.section-home-1 .container .wrapper .right .box-wrapper .box.box-5-6').addClass('hover');
    }, function() {
      $('.section-home-1 .container .wrapper .right .box-wrapper .box.box-5-6').removeClass('hover');
    }
  );

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
