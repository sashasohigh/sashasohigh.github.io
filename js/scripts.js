$(function () {
	$('[data-action="rotate"]').each(function () {
		var $item = $(this),
			$inner = $('<div class="inner">').appendTo($item),
			$dot = $('<div class="dot">').appendTo($item),
			dims = {
				W: this.clientWidth,
				H: this.clientHeight
			},
			center = {
				X: dims.W / 2,
				Y: dims.H / 2
			},
			ratio = dims.W / dims.H,
			rotate = $item.data('rotate'),
			angle = 0,
			start = 0,
			time = [20, 5],
			interval = time[0],
			process;

		$inner
			.on('mouseenter', function () {
				interval = time[1];
			})
			.on('mouseleave', function () {
				interval = time[0];
			});
		$item
			.on('mousedown', function () {
				clearTimeout(process);
			})
			.on('mouseup', function () {
				animation();
			});

		if (rotate) {
			rotate = rotate.split('*');

			if (rotate[1] !== undefined) {
				angle = Math.PI * parseInt(rotate[0]) / 180;
				$inner.css({
					transform: 'rotateZ(' + rotate[0] + ')'
				});
			} else {
				$item.css({
					transform: 'rotateZ(' + rotate[0] + ')'
				});
			}
		}

		animation();

		function animation() {
			var x = center.X * Math.sin(start),
				y = center.Y * Math.cos(start),
				X = x * Math.cos(angle) - y * Math.sin(angle),
				Y = x * Math.sin(angle) + y * Math.cos(angle);

			$dot.css({
				top: center.Y + Y,
				left: center.X + X
			});
			start += .02;

			process = setTimeout(animation, interval);
		}
	});
});


$(function() {
  $('.ticker').marquee({
    duration: 15000,
    startVisible: true,
    duplicated: true
  });
});

$('.services-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  arrows: true
});

$('.gallery-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  arrows: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.projects-gallery-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  arrows: true
});

$('.send_offer').click(function() {
	$('.send_offer_popup').addClass('show');
});

$('.send_offer_popup .close').click(function() {
	$('.send_offer_popup').removeClass('show');
});

$('.menu_trigger').click(function() {
	$('.header-nav').addClass('menu-open');
});

$('.menu_wrapper .inner .menu_header .close').click(function() {
	$('.header-nav').removeClass('menu-open');
});

