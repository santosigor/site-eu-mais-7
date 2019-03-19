$(document).ready(function (){

	var loading = location.href;
	var loadingActive = loading.split('/');

	if(loadingActive[3] != '') {
		$('.ems-header').after('<div class="ems-loading"><span></span></div>');
		$('.wp-block-categories').append('<a href="https://www.youtube.com/channel/UCovPLjSpV_YuUUbccz3O0bg" class="emsTV" target="_blank">Eu+7 TV</a>');
	} else {
		$('#emsWrapper').css('height', 'auto');
	}

	// menu

	bgNav();

	$('.nav-accr').on('click', function(e) {
    e.preventDefault();
	  $("html, body").animate({scrollTop: $('#' +$(this).data('section')).offset().top - 80}, 500);
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

	$('.pt-cv-content-item').hide();
  $('.pt-cv-content-item').slice(0, 8).show();

	if ($('.pt-cv-content-item:hidden').length == 0) {
		$('.is-style-outline').hide();
	}

  $('.is-style-outline a').on('click', function (e) {
    e.preventDefault();
    $('.pt-cv-content-item:hidden').slice(0, 8).slideDown('slow');
    if ($('.pt-cv-content-item:hidden').length == 0) {
        $('.is-style-outline').fadeOut('slow');
    }
  });

	$('.pt-cv-wrapper .pt-cv-page').addClass('row');
	$('.pt-cv-wrapper .pt-cv-page').find('img').css({'width':'100%', 'height':'auto'});
	$('.pt-cv-wrapper .pt-cv-readmore').removeClass('btn btn-success');

  $('.comment-form .comment-form-comment').find('textarea').addClass('form-control');
  $('.comment-form .comment-form-author').addClass('mb-3').find('input').addClass('form-control');
  $('.comment-form .comment-form-email').addClass('mb-3').find('input').addClass('form-control');
  $('.comment-form .form-submit').find('.submit').addClass('btn btn-secondary');

  $('.comment-form .comment-form-comment').before('<div class="d-md-flex flex-md-row" id="formOrder"></div>');

  $('.comment-form .comment-form-author').appendTo('#formOrder');
	$('.comment-form .comment-form-email').appendTo('#formOrder');

	$('.entry-footer a').attr('href', 'javascript:;').css({'color':'inherit', 'cursor':'default'});

	var baseUrl = window.location.hash;
	var id = (baseUrl.substring(baseUrl.lastIndexOf('#') + 1));	
	if (id != '' && id == 'wpcf7-f46-p13-o1'){
		$('#'+id+' form').hide();
		$('.alert-warning').removeClass('d-none');
		$("html, body").animate({scrollTop: $('#section_5').offset().top - 80}, 500);
	}

	if(loadingActive[3] != '') {
		setTimeout(function(){
			$('.ems-loading').remove();
			$('#emsWrapper').css('height', 'auto');
		}, 1000);
	}

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
							
	if($('#your-name').val()==""){
		erro=true; 
		emsElement += '#your-name, ';
	}
	if($('#your-email').val()==""){
		erro=true;
		emsElement += '#your-email, ';
	}
	if($('#your-subject').val()==""){
		erro=true;
		emsElement += '#your-subject, ';
	}
	if($('#your-message').val()==""){
		erro=true; 
		emsElement += '#your-message';
	}
	if (erro) {
		$(emsElement).addClass('ems-error');
	} else {
		$('form .btn').html('Enviando...').attr('disabled','disabled');
		d.submit();
	}
}

window.onload = function hash(){
	var baseUrl = window.location.hash;
	var id = (baseUrl.substring(baseUrl.lastIndexOf('#') + 1));	
	if (id != ''){		
		$("html, body").animate({scrollTop: $('#'+id).offset().top - 80}, 500);
	}
}

window.onload = function category(){
	var url = location.href;
	var urlS = url.split('/');
	if(urlS[3] == 'category') {
		$('section main header.page-header').after('<div class="row"></div>');
		$('article').appendTo('.row');
		$("section").addClass('ems-content');
		$("section main").addClass('container ems-list-category-post');
		$("section main header").removeClass('page-header entry-header');
		$("section main header h2").removeClass('entry-title');
		$("section main figure").removeClass('post-thumbnail');
		$("section main figure a").removeClass('post-thumbnail-inner');
		$("section main article").addClass('col-md-3 col-sm-6 col-xs-12');
		$("section main article img").attr('height', '');
		$("section main article .cat-links").remove();
		$("section main article .comments-link").remove();

		$("section main article").each(function(){
			var str = $(this).find('h2').text();
			var txt = $(this).find('p').text();
			var newTxt = txt.replace(str, '');
			$(this).find('p').text(newTxt);
  	});
	}
}