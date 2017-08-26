console.log('hello world!!!!');

var json = {};

fetch('soi.json').then(function(response) {
  var j = response.json();
  console.log('json', j);
  json = j
  return j;
});