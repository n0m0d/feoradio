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

	$(".toggle-menu").on("click", function() {
		$(this).toggleClass("on");
		$(".toggle-mobile-menu").slideToggle();
		return false;
	});

});
