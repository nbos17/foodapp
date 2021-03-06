//Declare Variables
var food;
var quality;
var time;

//Opening Screen Selections
$('#foodType').on('click', function() {
  $('#zero').css('display', 'none');
  $('#first').css('display', 'block');
});

// $('#byCost').on('click', function() {
//   $('#zero').css('display', 'none');
//   $('#second').css('display', 'block');
// });

// $('#byMethod').on('click', function() {
//   $('#zero').css('display', 'none');
//   $('#second').css('display', 'block');
// });


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

//home page back button
$('#goBack0').on('click', function() {
  $('#first').css('display', 'none');
  $('#zero').css('display', 'block');
})
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


//Search Results, Database call
$('#Submit').on('click', function() {
  console.log(food, quality, time);
  $('#eatOptions').empty();


  $.ajax('/food', {
    method: "GET",
    dataType: 'json',
    data : {
      food : food,
      quality : quality,
      time : time
    }
  }).done(function(response) {
    //console.log(response);

    $('#fourth').css('display', 'none');
    $('#five').css('display', 'block');
    if (response.length > 0) {
      for (var i = 0; i < response.length; i++) {
        var newDiv = $('<button>');
            newDiv.addClass('btn btn-primary');
            newDiv.attr('id', 'choices');
            newDiv.attr('value', response[i].name);
            newDiv.attr('data-menu', response[i].menu);
            newDiv.html(response[i].name);
        $('#eatOptions').append(newDiv);
      }
    }
    else {
      $('#noOptions').css('display', 'inline');
      $('#eatOptions').html("Sorry. No Options Available");
   }
  })
});

//RESET BUTTON AFTER SELECTION
$('#reset').on('click', function() {
  $('#five').css('display', 'none');
  $('#six').css('display', 'none');
  $('#zero').css('display', 'block');
  food = '';
  quality = '';
  time = '';
});

//MAKE YOUR SELECTION
$(document).on('click', '#choices', function() {
  var choice = this.value;
  var menu = $(this).data('menu');
  console.log(menu);
  console.log(choice);
  $('#five').css('display', 'none');
  $('#six').css('display', 'block');
  $('#yourChoice').html(this.value);
  $('#menu').attr('href', menu);
});


//RESET BUTTON NO OPTIONS AVAILABLE
$('#Reset').on('click', function() {
  $('#five').css('display', 'none');
  $('#six').css('display', 'none');
  $('#noOptions').css('display', 'none');
  food = '';
  quality = '';
  time = '';
});

//RANDOM OPTION!
$('#random').on('click', function() {

  $.ajax('/random', {
    method : "GET",
    dataType : "json"
  }).done(function(response) {
    var eatHere;
    var menu;
    //console.log(response);

    //choose restaurant

    var d = new Date();
    var weekday = new Array(7);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[d.getDay()];
    console.log(n);

    if (n == 'Tuesday') {
      eatHere = response[5].name;
      menu = 'BUCKETS!!!';
       //display correct card
      $('#zero').css('display', 'none');
      $('#six').css('display', 'block');
      $('#yourChoice').html(eatHere);
      $('#menu').html(menu);
    }
    else {
      var random = Math.floor((Math.random() * response.length));
      console.log(random);
      eatHere = response[random].name;
      menu = response[random].menu;
      console.log(eatHere);
      //display correct card
      $('#zero').css('display', 'none');
      $('#six').css('display', 'block');
      $('#yourChoice').html(eatHere);
      $('#menu').attr('href', menu);
    }
   


  })
});


