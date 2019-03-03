$(document).ready(function (){

	$(window).scroll(function() {
    bgNav();
	});

	bgNav();

});

function bgNav() {
 if ($(this).scrollTop()>84) {
    $('.ems-header__nav').css('background','#020202');
  } else {
    $('.ems-header__nav').css('background','');
  }
}