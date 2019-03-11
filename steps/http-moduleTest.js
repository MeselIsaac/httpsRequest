var library = require('./http-functions');

var requestOptions = {

  host: 'sytantris.github.io',

  path: '/http-examples/step5.html'
};


library.getHTML(requestOptions, library.printHTML);
