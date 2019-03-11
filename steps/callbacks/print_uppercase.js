var library = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function uppercaseHTML (html) {
  console.log(html.toUpperCase());
}

library.getHTML(requestOptions, uppercaseHTML);