var Twitter = require('twitter');
var config = require('./config.js');

var T = new Twitter(config);

//Search Params
var params = {
  q: '#370z',
  count: 10,
  result_type: 'recent',
  lang: 'en'
};

T.get('search/tweets', params, function(err, data, response) {
  // Proceed if no error is returned
  if (!err) {

  } else {
    console.log(err);
  }
});
