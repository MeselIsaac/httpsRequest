
module.exports = {

   printHTML: function (html) {
    console.log(html);
  },

  getHTML: function (option, callback) {
    var https = require('https');
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

};


