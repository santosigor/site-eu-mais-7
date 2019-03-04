$(document).ready(function (){

	bgNav();

	$(window).scroll(function() {
    bgNav();
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
		d.submit();
	}
}