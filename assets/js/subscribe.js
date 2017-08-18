$("#mG61Hd").submit(function() {
  $("#mG61Hd").hide();
  $('#subscribe-message').removeClass('hide');
  $('#subscribe-message').fadeIn("slow");
  $('html, body').animate({
    scrollTop: $('#subscribe-message').offset().top - 130
  },1500);
});
