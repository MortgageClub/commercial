//= require webpack-bundle

// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require client/vendor/modernizr-2.8.3.min
//= require client/vendor/jquery-3.1.1.min
//= require client/bootstrap.min
//= require client/lib/jquery.nivo.slider
//= require client/plugins

$(document).ready(function(){
  /*-------------------------------------------
      1. jQuery MeanMenu
  --------------------------------------------- */
  jQuery('nav#dropdown').meanmenu();

  /*-------------------------------------------
      2. wow js active
  --------------------------------------------- */
  new WOW().init();

  /*-------------------------------------------
      4. Nivo Slider
  --------------------------------------------- */
  // $('#ensign-nivoslider-3').nivoSlider({
  //     // effect: 'fade',
  //     effect: 'random',
  //     slices: 15,
  //     boxCols: 8,
  //     boxRows: 4,
  //     animSpeed: 500,
  //     pauseTime: 5000,
  //     prevText: 'p<br/>r<br/>e<br/>v',
  //     nextText: 'n<br/>e<br/>x<br/>t',
  //     startSlide: 0,
  //     directionNav: true,
  //     controlNav: true,
  //     controlNavThumbs: false,
  //     pauseOnHover: true,
  //     manualAdvance: false
  // });

  /* ********************************************
      5. Price Slider
  ******************************************** */
  // $( "#slider-range" ).slider({
  //     range: true,
  //     min: 20,
  //     max: 2500,
  //     values: [ 80, 2000 ],
  //     slide: function( event, ui ) {
  //         $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
  //     }
  // });
  // $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
  // " - $" + $( "#slider-range" ).slider( "values", 1 ) );

  /*************************
      6. tooltip
  *************************/
  $('[data-toggle="tooltip"]').tooltip();
  /*************************
      12. Blog Carousel
  *************************/
  // $('.pro-details-carousel').slick({
  //     arrows: false,
  //     dots: false,
  //     infinite: false,
  //     speed: 300,
  //     slidesToShow: 4,
  //     slidesToScroll: 3,
  //     responsive: [
  //         { breakpoint: 991, settings: { slidesToShow: 4, slidesToScroll: 3 } }, // Tablet
  //         { breakpoint: 767, settings: { slidesToShow: 3, slidesToScroll: 2 } }, // Large Mobile
  //         { breakpoint: 479, settings: { slidesToShow: 2, slidesToScroll: 2 } }  // Small Mobile
  //     ]
  // });
})