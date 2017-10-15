$(function() {
	$( 'audio' ).audioPlayer(
	{
		classPrefix: 'audioplayer', // default value: 'audioplayer'
		strPlay: 'Play', // default value: 'Play'
		strPause: 'Pause', // default value: 'Pause'
		strVolume: 'Volume', // default value: 'Volume'
	});

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

	$(".audioplayer-volume-button").on("click", function() {
		$(this).toggleClass("off");
	});

});
