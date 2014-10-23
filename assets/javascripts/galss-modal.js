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
				//$(modalShow +' .modal-content').append('<div class="close-modal" modal-attr="close"></div>');
			});
			//$('.galss-modal').append('<span class="close-modal"></span>');
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
/*$(function(){
	jQuery(document).ready(function ($){
		$('span.close-modal').click(function(){
			$('body').removeClass('open-modal');
			$('.galss-modal').animate({top: '-100%'}, 300).fadeOut();
			$('.modal-overlay').fadeOut(function(){
				$(this).remove();
			});
		});
	});
});*/