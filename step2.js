var https = require('https');

function getAndPrintHTML() {
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };
  https.get(requestOptions, function (response) {
    response.setEncoding('utf-8');
    var allData = '';
    response.on('data', function(data) {
      allData += data;
    });
    response.on('end', function() {
      console.log(allData);
      console.log('Transmission complete, Captain.');
    });
  });
}

getAndPrintHTML();
