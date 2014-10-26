$(window).load(function(){
	jQuery(document).ready(function ($) {
		$('.modal-block').append('<div class="close-modal" modal-attr="close"></div>');
		$('[modal-target-id]').click(function(){
			var modalShow = $(this).attr('modal-target-id');
			//alert(mtargetId);
			//$(this).addClass(mtargetId);
			$('body').addClass('open-modal').append('<div class="modal-overlay"></div>');
			$('.modal-overlay').hide();
			$('.modal-overlay').fadeIn(function(){
				$(modalShow).fadeIn().css('top', '-100%');
				$(modalShow).animate({top: 0}, 300);
			});
		});
		$('.close-modal').click(function(){
			$('body').removeClass('open-modal');
			$('.galss-modal').animate({top: '-100%'}, 300).fadeOut();
			$('.modal-overlay').fadeOut(function(){
				$(this).remove();
			});
		});
	});
});
/*$(function() {
	//External modal
	if($('a[modal-type="external"]')) {
		$(this).click(function(){
			var modalShowExternal = $(this).attr('modal-target-id');
			var geturl = $(this).attr('href');
			//$(modalShowExternal +' .modal-content').load(geturl);
			//var getcontent = $('.galss-modal .modal-content').load(geturl);
			var getcontent = $.get(geturl);
			$('body').addClass('open-modal').append('<div class="modal-overlay"></div>');
			$('.modal-overlay').show(function(){
				$('body').append('<div id="external-modal" class="galss-modal"><div class="modal-block"><div class="modal-content">'+getcontent+'</div></div></div>');
				$('.modal-block').append('<div class="close-modal" modal-attr="close"></div>');
				$('#external-modal').fadeIn().css('top', '-100%');
				$('#external-modal').animate({top: 0}, 300);
			});
			return false;
		});
	}
});*/
