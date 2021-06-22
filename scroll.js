$('.container').click(function(){
    var id = $(this).attr('id');
    var next = (Number(id) + 1);
    //window.scrollTo(0, $('#'+next).offset().top);
    $('html, body').animate({scrollTop : $('#'+next).offset().top}, 2000);
  });