$(function(){

// Al hacaer click en el boton publicar, se obtiene el valor el input y se imprime
    $('.enviar').click(function(){
      var newText = $('.new_text').val();
      var newTweet = $('.row.new_tweet__publicado').clone();
      $(newTweet).find('.text').html(newText);
      $('.tweets').prepend(newTweet);

    $('.likes a').addClass('likeable');
    $('.likeable').click(function(){
      $(this).css('color', 'red');
      $('.contador_likes').
    })


  });
})
