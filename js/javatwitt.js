$( document ).ready(function() {
    console.log( "ready!" );

$('#tweet-content>.tweet-compose').focus(function(){
	$("#tweet-controls").show();
})


$('.tweet-compose').focus(function () {
    $(this).animate({ height: "4em" }, 500);


maxCharacters = 140;

$('.tweet-compose').bind('keyup keydown', function() {
    var count = $('.char-count');
    var characters = $(this).val().length;

    if (characters > maxCharacters) {
        count.addClass('over');
    } else {
        count.removeClass('over');
    }

    count.text(maxCharacters - characters);
$(function(){
     $('.button').click(function(){
         if ($(this).val() > '0') {
               $('.enableOnInput').prop('disabled', true);
          } else {
              $('.enableOnInput').prop('disabled', false);
          }
     $
     });
});
});
$(".reply").click(function(){
  $(".stats").css("display", "block");
  $(".stats").show();
 
});




});

});





