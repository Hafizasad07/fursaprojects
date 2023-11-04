jQuery(".carousel0").owlCarousel({
  autoplay: false,
  rewind: false,
  loop: true,
  /* use rewind if you don't want loop */
  margin: 0, 
  /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  dots: false,
  items: 1,
});

jQuery(".carousel1").owlCarousel({
    autoplay: false,
    rewind: false,
    loop: true,
    /* use rewind if you don't want loop */
    margin: 40, 
    /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoHeight: true,
    center: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 1
      },
  
      1024: {
        items: 1.5
      },
  
      1366: {
        items:1.5
      }
    }
});

jQuery(".carousel2").owlCarousel({
    autoplay: false,
    rewind: true,
    loop: false,
    /* use rewind if you don't want loop */
    margin: 20, 
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
  
      600: {
        items: 2
      },
  
      1024: {
        items: 3
      },
  
      1366: {
        items:3
      }
    }
});

jQuery(".carousel3").owlCarousel({
  autoplay: false,
  rewind: false,
  loop: true,
  /* use rewind if you don't want loop */
  margin: 10, 
  touchDrag  : false,
  mouseDrag  : false,
  responsiveClass: true,
  autoHeight: false,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: false,
  dots: true,
  items: 1
});

$( ".owl-next").html('<i class="fa fa-play"></i>');
$( ".owl-prev").html('<i class="fa fa-play"></i>');
$( ".carousel2 .owl-prev").html('<img src="assets/images/Left.png" alt="">');
$( ".carousel2 .owl-next").html('<img src="assets/images/Right.png" alt="">');

$("#form-message").hide();
$("#contact-form").submit(function(e) {
    e.preventDefault();
    var form = $(this);
    $.ajax({
        url: "assets/contact/contact.php",
        method: "get",
        data: form.serialize(),
        success: function(result){
            if (result == "The email massage was sent.") {
                $("#form-message").show();
                $("#contact-form")[0].reset();
                setTimeout(() => {
                    $("#form-message").hide();
                }, 10000);
            }
        }
    });
});

var $slider_tab = $('.slider-tab').click(function() {
  if (this.id == 'all') {
      $($('#slider-tabs-content .slider-tab-item')).removeClass("d-none");
      $($('#slider-tabs-content .slider-tab-item')).fadeIn(450);
  } else {
      $($('#slider-tabs-content .slider-tab-item')).removeClass("d-none");
      var $el = $('.' + this.id).fadeIn(450);
      $($('#slider-tabs-content .slider-tab-item').not($el)).addClass("d-none");
  }
  $slider_tab.removeClass('active');
  $(this).addClass('active');
})
$("#ab").click();