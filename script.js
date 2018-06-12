//Choose Food Option
$('.food').on('click', function() {
	$('#second').css('display', 'block');
	$('#first').css('display', 'none');
});

//Choose Cheap Second Card
$('#Cheap').on('click', function() {
	$('#second').css('display', 'none');
	$('#third').css('display', 'block');
});

//Choose Healthy Second Card
$('#Healthy').on('click', function() {
	$('#second').css('display', 'none');
	$('#third').css('display', 'block');
});

//Go Back To First Card
$('#goBack').on('click', function() {
	$('#second').css('display', 'none');
	$('#first').css('display', 'block');
});

//Go Back To Second Card
$('#goBack2').on('click', function() {
	$('#second').css('display', 'block');
	$('#third').css('display', 'none');
})

