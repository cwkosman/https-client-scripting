var https = require('https');

module.exports = function getHTML(options, callback) {
  https.get(options, function (response) {
    response.setEncoding('utf-8');
    var allData = '';
    response.on('data', function(data) {
      allData += data;
    });
    response.on('end', function () {
      callback(allData);
    });
  });
};
