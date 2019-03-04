$(window).scroll(function(){
  var y = $(window).scrollTop()
  if (y <= 1500){
    $('.menu-header').css('background-color','#151515');
  } 
});