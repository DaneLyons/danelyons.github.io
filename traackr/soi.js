console.log('hello world!!!!');

var json = {};

fetch('soi.json').then(function(response) {
  var j = response.json();
  return j;
}).then(j) {
  console.log('json', j);
  json = j;
});