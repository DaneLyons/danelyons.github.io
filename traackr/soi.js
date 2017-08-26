console.log('hello world!!!!');

var json = {};

fetch('soi.json', {
  method: 'get'
}).then(function(response) {
  var json = response.body;
});