$(document).ready(function(){
  // var scrollDistance = 50;
  // $(window).scroll(function() {
  //   if ($(this).scrollTop() > scrollDistance) {
  //     $('header').addClass('header-dark');
  //   } else {
  //     $('header').removeClass('header-dark');
  //   }
  //   // if ($(this).scrollTop() > $(window).height() - 200) {
  //   //   $('body').removeClass('bg-dark');
  //   // } else {
  //   //   $('body').addClass('bg-dark');
  //   // }
  // });




  // function checkVisibility() {
  //   var processWrapper = $('.process-wrapper');
  //   var offsetTop = processWrapper.offset().top;
  //   var scrollTop = $(window).scrollTop();
  //   var windowHeight = $(window).height();

  //   // Проверяем, находится ли элемент .process-wrapper в видимой области экрана
  //   if (offsetTop < scrollTop + windowHeight && offsetTop + processWrapper.height() > scrollTop) {
  //     processWrapper.addClass('show');
  //   } else {
  //     processWrapper.removeClass('show');
  //   }
  // }

  // // Вызываем функцию при загрузке страницы и при каждом событии прокрутки
  // checkVisibility();
  // $(window).scroll(checkVisibility);



  // function checkVisibility() {
  //   $('.step').each(function () {
  //     var step = $(this);
  //     var offsetTop = step.offset().top;
  //     var scrollTop = $(window).scrollTop();
  //     var windowHeight = $(window).height();

  //     // Проверяем, находится ли верхняя половина блока в видимой области экрана
  //     if (offsetTop < scrollTop + windowHeight / 2 && offsetTop + step.height() > scrollTop) {
  //       step.addClass('active');
  //     } else {
  //       step.removeClass('active');
  //     }
  //   });
  // }

  // // Вызываем функцию при загрузке страницы и при каждом событии прокрутки
  // checkVisibility();
  // $(window).scroll(checkVisibility);



  $('.go-down').click(function() {
    $('html, body').animate({scrollTop: $(window).height() - 50}, 'slow');
  });



  var textElement = $('#typing-text');
  var words = ["Сайта", "Приложения", "Магазина"];
  var wordIndex = 0;
  var letterIndex = 0;
  var isDeleting = false;
  var typingSpeed = 300; // Скорость печати и стирания (в миллисекундах)

  function typeText() {
    var currentWord = words[wordIndex];
    var currentText = currentWord.substring(0, letterIndex);

    textElement.text(currentText);

    if (!isDeleting) {
      letterIndex++;

      if (letterIndex > currentWord.length) {
        isDeleting = true;
        setTimeout(typeText, typingSpeed * 2);
      } else {
        setTimeout(typeText, typingSpeed);
      }
    } else {
      letterIndex--;

      if (letterIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeText, typingSpeed);
      } else {
        setTimeout(typeText, typingSpeed / 2);
      }
    }
  }

  typeText();


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

  $(".project-preview-trigger").click(function() {
    $('body').addClass('project-preview-popup');
  });

  $(".close").click(function() {
    $('body').removeClass('project-preview-popup');
  });

  $(".mob-menu-trigger").click(function() {
    $('header').toggleClass('header-menu');
  });

  $("form").on("click","p", function (event) {
    if (!$(this).find('input').val()) {
      $(this).addClass('empty');
    }
  });






});