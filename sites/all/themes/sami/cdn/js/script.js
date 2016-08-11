(function($){
jQuery( document ).ready(function($) {

  $('h2.block-title').css('cursor' , 'pointer').click(function(){
  $(this).parent().children('.links').slideToggle();
});

  $('.field-content p').hover(
    function(){
      $(this).addClass('hilight');
    },
    function(){
      $(this).removeClass('hilight')
    }
    );


});

})(jQuery);
