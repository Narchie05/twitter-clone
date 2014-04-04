$( document ).ready(function() {
    console.log( "ready!" );

$('.tweet-compose').focus(function(){
	$("#tweet-controls").show();
})


$('.tweet-compose').focus(function () {
    $(this).animate({ height: "4em" }, 500);


 


maxCharacters = 140;

$('.tweet-compose').bind('keyup keydown', function() {
    var count = $('.char-count');
    var characters = $(this).val().length;

    if (characters > maxCharacters) {
        count.addClass('.over');
    } else {
        count.removeClass('.over');
    }

    count.text(maxCharacters - characters);
});

   	});


})


