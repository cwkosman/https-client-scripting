var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

function getAndPrintHTML(options, callback) {
  https.get(options, function (response) {
    response.setEncoding('utf-8');
    var allData = '';
    response.on('data', function(data) {
      allData += data;
    });
    response.on('end', callback);
  });
}

function printHTML(html) {
  console.log(html);
}

getAndPrintHTML(requestOptions, printHTML);
