// 
// a vanilla javascript
// 

// quick test
var x = document.querySelectorAll("#y_highlight");
x[0].style.backgroundColor = "yellow";

// test to add text
var y = document.querySelectorAll("#js_data");
y[0].innerText = "green";

// 
// jQuery
// 

// use postman code

// GET

// use jquery to GET data from the data folder
var settings_GET = {
  "url": "../data/data.json",
  "method": "GET",
  "timeout": 0,
};

// function
$.ajax(settings_GET).done(function (response) {
  console.log(response);
});

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

