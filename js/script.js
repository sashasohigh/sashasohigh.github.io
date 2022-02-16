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


var header = $("header");
var scrollChange = 25;
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= scrollChange) {
        header.addClass('header-bg');
    } else {
        header.removeClass("header-bg");
    }
});