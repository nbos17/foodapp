

//Button Options-------------------------------
var food;
var quality;
var time;

//Choose Food Option
$('.food').on('click', function() {
	food = $(this).val();
	console.log(food);
	$('#second').css('display', 'block');
	$('#first').css('display', 'none');
});

//Choose Cheap Second Card
$('.q2').on('click', function() {
	quality = $(this).val();
	console.log(quality);
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
});

//Go Back To Third Card
$('#goBack3').on('click', function() {
	$('#fourth').css('display', 'none');
	$('#third').css('display', 'block');
});

//Time Card Choice Option
$('.t2').on('click', function() {
	time = $(this).val();
	console.log(time);
	$('#fourth').css('display', 'block');
	$('#third').css('display', 'none');
	$('#foodChoice').html(food);
	$('#foodQuality').html(quality);
	$('#foodTime').html(time);
});



$('#Submit').on('click', function() {
  console.log(food, quality, time);


  $.ajax('/food', {
    method: "GET",
    dataType: 'json',
    data : {
      food : food,
      quality : quality,
      time : time
    }
  }).done(function(response) {
    console.log(response);
    $('#fourth').css('display', 'none');
    $('#five').css('display', 'block');
    $('#yourChoice').html(response[0].name);
  })
});



// var headers = {
//   "user-key" : "b851ebe74e4a4c18d6262124a3a20db7",
//   "Accept" : "application/json"
// }

// var url = "https://developers.zomato.com/api/v2.1/search?entity_id=120403&entity_type=subzone&radius=3000&cuisines=fast%20food&sort=real_distance&order=desc"


// $.ajax(url, {
//     method : "GET",
//     headers : headers,
//     dataType : 'json'
//     }).done(function(response) {
//       console.log(response);

//     });

