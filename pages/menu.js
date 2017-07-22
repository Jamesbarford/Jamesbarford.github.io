$(document).ready(function(){


$(".nav-icon").click(function(){
  $(this).toggleClass("open");
  $(".navigation").toggleClass("open");
  $("#all").toggleClass("open");
  $(".gallery").toggleClass("open");
  });


  var scroll_start = 0;
     var startchange = $('.startchange');
     var offset = startchange.offset();
      if (startchange.length){
     $(document).scroll(function() {
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top) {
            $("nav").css({
            "background-color": "#fff",
            "opacity": ".9",
            "transition": "all ease .5s",
            "-webkit-transition": "all ease .5s",
            "-moz-transition": "all ease .5s",
          })

            $(".nav-icon span").css("background-color", "#333")
            $("nav h2").css({
              "color": "#333",
              "transition": "all ease .5s",
              "-webkit-transition": "all ease .5s",
              "-moz-transition": "all ease .5s",
            });

         } else {
            $("nav").css("background-color", "transparent")
            $(".nav-icon span").css("background-color", "#fff")
            $("nav h2").css("color", "#fff");
         }
     });
      }

    $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
        window.location.hash = target;
    });
});

});
