console.log('hello world!!!!');

fetch('soi.json', {
  method: 'get'
}).then(function(response) {
  console.log(response.body);
});