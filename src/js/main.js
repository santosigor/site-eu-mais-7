$(document).ready(function (){

	// menu

	bgNav();

	$('.nav-accr').on('click', function() {
	  $("html, body").animate({
	    scrollTop: $('#' +$(this).data('section')).offset().top - 80}, 500);
	});

	var alturas = {};
	$('.section').each(function () {
	  alturas[$(this).prop('id')] = $(this).offset().top - 84;
	});

	$(window).scroll(function() {
    
    bgNav();


  	$('.nav-accr').removeClass('active');
  	if ($(this).scrollTop()>200) {
    	for(var seccao in alturas) {
		    if($(window).scrollTop() >= alturas[seccao]) {
		      $('.nav-accr').removeClass('active');
		      $('.nav-accr[data-section="' +seccao+ '"]').addClass('active');
		    }
	    }
	  }

	});

	// blog

	$('.ems-blog-item').hide();
  $('.ems-blog-item').slice(0, 8).show();

	if ($('.ems-blog-item:hidden').length == 0) {
		$('.ems-blog-bt-show-more').hide();
	}

  $('.ems-blog-bt-show-more a').on('click', function (e) {
    e.preventDefault();
    $('.ems-blog-item:hidden').slice(0, 8).slideDown('slow');
    if ($('.ems-blog-item:hidden').length == 0) {
        $('.ems-blog-bt-show-more').fadeOut('slow');
    }
  });

});

function bgNav() {
 if ($(this).scrollTop()>84) {
    $('.ems-header__nav').css('background','#020202');
  } else {
    $('.ems-header__nav').css('background','');
  }
}

function emsFocusIpt(ems) {
	$(ems).removeClass('ems-error');
}

function Contato(){

	d = document.form;
	erro = false;
	emsElement = '';
							
	if(d.nome.value==""){
		erro=true; 
		emsElement += '#nome, ';
	}
	if(d.mail.value==""){
		erro=true;
		emsElement += '#mail, ';
	}
	if(d.assunto.value==""){
		erro=true;
		emsElement += '#assunto, ';
	}
	if(d.mensagem.value==""){
		erro=true; 
		emsElement += '#mensagem';
	}
	if (erro) {
		$(emsElement).addClass('ems-error');
	} else {
		$('form .btn').html('Enviando...').attr('disabled','disabled');
		setTimeout(function(){ 
			$('form').css('display', 'none');
			$('.alert-warning').removeClass('d-none'); 
		}, 3000);
	}
}