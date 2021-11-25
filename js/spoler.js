$(document).ready(function () {
	$('.faq__title').click(function (event) {
		if ($('.block').hasClass('one')) {
			$('.faq__title').not($(this)).removeClass('active');
			$('.faq__text').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});