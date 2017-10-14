$(function() {

	/* 
	==============================
	Custom Select "Selectize"
	============================== 
	*/
	$('.city-filter').selectize({
		create: true,
		fortField: 'text'
	});

	$('.cat-filter').selectize({
		create: true,
		fortField: 'text',
		placeholder: 'Рубрика'
	});

	$(".toggle-menu").on("click", function() {
		$(this).toggleClass("on");
		$(".toggle-mobile-menu").slideToggle();
		return false;
	});

	$(".main-menu ul li").on("click", function() {
		$(".main-menu ul li").removeClass("active");
		$(this).addClass("active");
	});

});
