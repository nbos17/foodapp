
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


// //Choice Recording-----------------------------
// https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyDCZSnTZ6SCg14rS-zvlQPhJ9oi-gY4jec

// https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCEQPmU9PT8Ws-pgAsdNUvsYLHtdnWyUGk

// https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=mongolian%20grill&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyDCZSnTZ6SCg14rS-zvlQPhJ9oi-gY4jec

//https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyDCZSnTZ6SCg14rS-zvlQPhJ9oi-gY4jec

// var map;
// var infowindow;

//   function initMap() {
//     var pyrmont = {lat: 44.9516853, lng: -92.9564372};

//     map = new google.maps.Map(document.getElementById('map'), {
//       center: pyrmont,
//       zoom: 15
//     });

//     infowindow = new google.maps.InfoWindow();
//     var service = new google.maps.places.PlacesService(map);
//     service.nearbySearch({
//       location: pyrmont,
//       radius: 8000,
//       types: ['restaurant']
//     }, callback);
//   }

var map;
var service;
var infowindow;

function initialize() {
  var pyrmont = new google.maps.LatLng(44.9516853,-92.9564372);

  map = new google.maps.Map(document.getElementById('map'), {
      center: pyrmont,
      zoom: 15
    });

  var request = {
    location: pyrmont,
    radius: '500',
    query : 'kfc'
    // type : ['kfc']
  };

  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      console.log(place);
      createMarker(results[i]);
    }
  }
}

  // function callback(results, status) {
  //   if (status === google.maps.places.PlacesServiceStatus.OK) {
  //     for (var i = 0; i < results.length; i++) {
  //     	console.log(results[i]);
  //       createMarker(results[i]);
  //     }
  //   }
  // }

  function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(place.name);
      infowindow.open(map, this);
    });
  }

initialize();