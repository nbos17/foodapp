var quality;

//choose cost card
$('.q2').on('click', function() {
    quality = $(this).val(); 
    console.log(quality);
    $('#five').css('display', 'block');
    $('#second').css('display', 'none');
    $('#eatOptions').empty();

    $.ajax('/foodCost', {
        method: 'GET',
        dataType: 'json',
        data : {
            quality : quality
        }
    }).done(function(response) {
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
            $('#noOptions').css('display', 'block');
            $('#eatOptions').html("Sorry. No Options Available");
         }
    })
});

//MAKE YOUR SELECTION
$(document).on('click', '#choices', function() {
    var choice = this.value;
    var menu = $(this).data('menu');
    console.log(choice);
    $('#five').css('display', 'none');
    $('#six').css('display', 'block');
    $('#yourChoice').html(this.value);
    $('#menu').attr('href', menu);
});

//RESET BUTTON AFTER SELECTION
$('#reset').on('click', function() {
    $('#six').css('display', 'none');
    quality = '';
});