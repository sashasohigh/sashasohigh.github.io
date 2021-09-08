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
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
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

$('.projects-slider').slick({
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


(function(){ 
  document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      let el_1 = document.querySelector('#test');
      let myAnimation_1 = new LazyLinePainter(el_1, {"ease":"easeInQuad","strokeWidth":1,"strokeOpacity":1,"strokeColor":"#3E5585","strokeCap":"square"}); 
      myAnimation_1.paint(); 

      let el_2 = document.querySelector('#home_1');
      let myAnimation_2 = new LazyLinePainter(el_2, {"ease":"easeInQuad","strokeWidth":1,"strokeOpacity":1,"strokeColor":"#3E5585","strokeCap":"square"}); 
      myAnimation_2.paint();

      let el_3 = document.querySelector('#home_2');
      let myAnimation_3 = new LazyLinePainter(el_3, {"ease":"easeLinear","strokeWidth":1,"strokeOpacity":1,"strokeColor":"#3E5585","strokeCap":"square"}); 
      myAnimation_3.paint();

      let el_4 = document.querySelector('#category_1');
      let myAnimation_4 = new LazyLinePainter(el_4, {"ease":"easeInCubic","strokeWidth":1,"strokeOpacity":1,"strokeColor":"#3E5685","strokeCap":"square"}); 
      myAnimation_4.paint(); 

      let el_5 = document.querySelector('#category_2');
      let myAnimation_5 = new LazyLinePainter(el_5, {"ease":"easeInCubic","strokeWidth":1,"strokeOpacity":1,"strokeColor":"#3E5685","strokeCap":"square"}); 
      myAnimation_5.paint(); 

      let el_6 = document.querySelector('#category_3');
      let myAnimation_6 = new LazyLinePainter(el_6, {"ease":"easeInCubic","strokeWidth":1,"strokeOpacity":1,"strokeColor":"#3E5685","strokeCap":"square"}); 
      myAnimation_6.paint();

      let el_7 = document.querySelector('#category_4');
      let myAnimation_7 = new LazyLinePainter(el_7, {"ease":"easeInCubic","strokeWidth":1,"strokeOpacity":1,"strokeColor":"#3E5685","strokeCap":"square"}); 
      myAnimation_7.paint();

      let el_8 = document.querySelector('#category_5');
      let myAnimation_8 = new LazyLinePainter(el_8, {"ease":"easeInCubic","strokeWidth":1,"strokeOpacity":1,"strokeColor":"#3E5685","strokeCap":"square"}); 
      myAnimation_8.paint();

      let el_9 = document.querySelector('#category_6');
      let myAnimation_9 = new LazyLinePainter(el_9, {"ease":"easeInCubic","strokeWidth":1,"strokeOpacity":1,"strokeColor":"#3E5685","strokeCap":"square"}); 
      myAnimation_9.paint();

      let el_10 = document.querySelector('#category_7');
      let myAnimation_10 = new LazyLinePainter(el_10, {"ease":"easeInCubic","strokeWidth":1,"strokeOpacity":1,"strokeColor":"#3E5685","strokeCap":"square"}); 
      myAnimation_10.paint();

      let el_11 = document.querySelector('#category_8');
      let myAnimation_11 = new LazyLinePainter(el_11, {"ease":"easeInCubic","strokeWidth":1,"strokeOpacity":1,"strokeColor":"#3E5685","strokeCap":"square"}); 
      myAnimation_11.paint();

      let el_12 = document.querySelector('#category_9');
      let myAnimation_12 = new LazyLinePainter(el_12, {"ease":"easeInCubic","strokeWidth":1,"strokeOpacity":1,"strokeColor":"#3E5685","strokeCap":"square"}); 
      myAnimation_12.paint();

      let el_13 = document.querySelector('#category_10');
      let myAnimation_13 = new LazyLinePainter(el_13, {"ease":"easeInCubic","strokeWidth":1,"strokeOpacity":1,"strokeColor":"#3E5685","strokeCap":"square"}); 
      myAnimation_13.paint();
    }
  }
})();

jQuery(function($) {
	setTimeout(function(){
	  $('.section-home-one h1').addClass('show_animate');
	}, 2000);
});





// var lastScrollTop = 0;
// $(window).scroll(function(event){
//    var st = $(this).scrollTop();
//    if (st > lastScrollTop){
//        // downscroll code
//    } else {
//       // upscroll code
//    }
//    lastScrollTop = st;
// });


// $(document).ready(function(){
//     $('#foo').bind('mousewheel', function(e){
//         if(e.originalEvent.wheelDelta /120 > 0) {
//             console.log('scrolling up !');
//         }
//         else{
//             console.log('scrolling down !');
//         }
//     });
// });



// var anchors = [];
// var currentAnchor = -1;
// var isAnimating  = false;
// $(function(){
//     function updateAnchors() {
//         anchors = [];
//         $('.anchor').each(function(i, element){
//             anchors.push( $(element).offset().top );
//         });
//     }
//     $('.section-home-one').on('mousewheel', function(e){
//         if(e.originalEvent.wheelDelta /120 > 0) {
//             console.log('scrolling up !');
//         }
//         else{
//             e.preventDefault();
//         e.stopPropagation();
//         if( isAnimating ) {
//             return false;
//         }
//         isAnimating  = true;
//         if( e.originalEvent.wheelDelta >= 0 ) {
//             currentAnchor--;
//         }else{
//             currentAnchor++;
//         }
//         if( currentAnchor > (anchors.length - 1) 
//            || currentAnchor < 0 ) {
//             currentAnchor = 0;
//         }
//         isAnimating  = true;
//         $('html, body').animate({
//             scrollTop: parseInt( anchors[currentAnchor] )
//         }, 1500, 'swing', function(){
//             isAnimating  = false;
//         });
//         }    
//     });
//     $('.section-services .wrapper').on('mousewheel', function(e){
//         if(e.originalEvent.wheelDelta /120 > 0) {
//             e.preventDefault();
//             e.stopPropagation();
//             if( isAnimating ) {
//                 return false;
//             }
//             isAnimating  = true;
//             if( e.originalEvent.wheelDelta >= 0 ) {
//                 currentAnchor--;
//             }else{
//                 currentAnchor++;
//             }
//             if( currentAnchor > (anchors.length - 1) 
//                || currentAnchor < 0 ) {
//                 currentAnchor = 0;
//             }
//             isAnimating  = true;
//             $('html, body').animate({
//                 scrollTop: parseInt( anchors[currentAnchor] )
//             }, 1500, 'swing', function(){
//                 isAnimating  = false;
//             });
//         }
//         else {
            
//         }    
//     });
//     updateAnchors();   
// });


$('.section-box .content-video .iframe_bg button').click(function() {
  $('.section-box .content-video .iframe_bg').fadeOut();
});

$('.tabs ul li').click(function() {
  $('.tabs ul li').removeClass('active');
  $('.tabs-body .tab').removeClass('active');
  $(this).addClass('active');
});

$('#tab_li_1').click(function() {
  $('#tab_1').addClass('active');
});

$('#tab_li_2').click(function() {
  $('#tab_2').addClass('active');
});

$('#tab_li_3').click(function() {
  $('#tab_3').addClass('active');
});

$('#btn-video').click(function() {
  $('.video-popup').addClass('active');
});

$('.video-popup .close').click(function() {
  $('.video-popup').removeClass('active');
});
