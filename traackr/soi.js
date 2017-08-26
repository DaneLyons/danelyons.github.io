console.log('hello world!!!!');

fetch('soi.json', {
  method: 'get'
}).then(function(json) {
  console.log(json);
});