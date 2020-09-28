// 
// vanilla javascript
// 

// quick test
var x = document.querySelectorAll("#y_highlight");
x[0].style.backgroundColor = "yellow";

// test to add text
var y = document.querySelectorAll("#js_data");
y[0].innerText = "green";

// 

// 
// jQuery
// 

// use postman code

// GET

// use jquery to GET data from the data folder
var settings_GET = {
  "url": "../file/data.json",
  "method": "GET",
  "timeout": 0,
  "dataType": "json",
};

// function
$.ajax(settings_GET)
.done(function(response){
  console.log(response);
})
.fail(function( xhr, status, errorThrown ) {
  alert( "Sorry, there was a problem!" );
  console.log( "Error: " + errorThrown );
  console.log( "Status: " + status );
  console.dir( xhr );
})
.always(function( xhr, status ) {
  // Code to run regardless of success or failure;
  console.log( "The request is complete!" );
});

// 

// other useful sources
// https://learn.jquery.com/ajax/jquery-ajax-methods/
// https://www.tutorialsteacher.com/jquery/jquery-get-method
// https://www.tutorialsteacher.com/codeeditor?cid=jquery-111
// https://api.jquery.com/jQuery.get/

// function 2

// use jquery to GET data from the data folder
var settings_GET2 = {
  "url": "../file/steve.json",
  "method": "GET",
  "timeout": 0,
  "dataType": "json",
};

// function
$.ajax(settings_GET2)
.done(function(response){
  console.log(response);
  $('#ajaxBtn').click(function(){
    console.log(response[0].name);
    $('#ajaxInput').append(response[0].name);
  });
})
.fail(function( xhr, status, errorThrown ) {
  alert( "Sorry, there was a problem!" );
  console.log( "Error: " + errorThrown );
  console.log( "Status: " + status );
  console.dir( xhr );
})
.always(function( xhr, status ) {
  // Code to run regardless of success or failure;
  console.log( "The request is complete!" );
});

// 

// POST

// // use jquery to POST data from the data folder
// var settings_POST = {
//   "url": "../file/file.json",
//   "method": "POST",
//   "timeout": 0,
// };

// // function
// $.ajax(settings_POST).done(function (response) {
//   console.log(response);
// });

