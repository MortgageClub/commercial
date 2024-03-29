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
  new WOW().init();
  $('[data-toggle="tooltip"]').tooltip();
  
  $('.counter1').counterUp({
    delay: 10,
    time: 600
  });

  $('.counter2').counterUp({
    delay: 10,
    time: 600
  });
  
  $('.counter3').counterUp({
    delay: 10,
    time: 600
  });
})