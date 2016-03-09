$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('.nav');
   var offset = startchange.offset();
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('.nav').css('background-color', '#ECE350');
       } else {
          $('.nav').css('background-color', 'transparent');
       }
   });

   $('.header-title').hover(function() {
     $(this).addClass('animated pulse');
   });

});
