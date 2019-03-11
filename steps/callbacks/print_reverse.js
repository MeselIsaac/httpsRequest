var library = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function reverseHTML (html) {
  var reverseHTML = html.split('').reverse().join("");
  console.log(reverseHTML);
}

library.getHTML(requestOptions, reverseHTML);