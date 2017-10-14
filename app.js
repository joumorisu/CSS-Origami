$(document).ready(function () {

	var cp = ColorPicker(
		document.getElementById('color-picker'),
		function (hex, hsv, rgb) {
			document.body.style.backgroundColor = hex;
		}
	);

	$('.fold:not(.all)').click(function () {
		$(this).prev().addClass('animate');
	});

	$('.unfold:not(.all)').click(function () {
		$(this).prev().removeClass('animate');
	});
	
	$('.fold.all').click(function () {
		$('.card').addClass('animate');
	});

	$('.unfold.all').click(function () {
		$('.card').removeClass('animate');
	});					
	
});