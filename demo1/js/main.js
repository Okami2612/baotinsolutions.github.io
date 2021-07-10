// Top bar
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      autoplay: true,
      items: 1,
      loop: true,
      nav: false,
      dots: false,
      mouseDrag: false,
      slideSpeed: 300,
  });
  $(".carouselHero").owlCarousel({
      autoplay: true,
      loop: true,
  });

  var owl = $('.owl-carousel');
    owl.owlCarousel();
    // Go to the next item
    $('.owl-next').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.owl-prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })
});
$(document).ready(function () {
  $('.recent-news-box').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
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
})
$(document).ready(function () {
  $('.other-news-box').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
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
})
$(document).ready(function () {
    $('.video-items-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: false,
        fade: true,
        dots: true,
        asNavFor: '.testmonial-nav',
    });
    $('.testmonial-nav').slick({
        slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.video-items-active',
      dots: false,
      prevArrow: '<button type="button" class="slick-prev">Previous</button>',
      nextArrow: '<button type="button" class="slick-next">Next</button>',
      centerMode: true,
      focusOnSelect: true,
      centerPadding:0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
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
    })
});