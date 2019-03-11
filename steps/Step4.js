var https = require('https');



function getHTML (option, callback) {
  var buffer = '';
  https.get(option, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
      buffer += data
    })
    response.on('end', function() {
      callback(buffer);

    })
  })

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);

