/*jshint esversion: 6 */
require('dotenv').config();

var Twitter = require('twitter');
var config = require('./config.js');

var client = new Twitter(config);

//Search Parameters
var params = {
  q: '#370z',
  count: 20,
  result_type: 'recent',
  lang: 'en'
};

function favTweet(err, response) {
  if (err) {
    console.log(err[0].message);
  } else {
    let username = response.user.screen_name;
    let tweetID = response.id_str;
    console.log('Favorited: ', `https://twitter.com/${username}/status/${tweetID}`);
  }
}

client.get('search/tweets', params, function(err, data, response) {
  // Proceed if no error is returned
  if (!err) {
    for (let i = 0; i < data.statuses.length; i++) {
      let id = {
        id: data.statuses[i].id_str
      };
      client.post('favorites/create', id, favTweet);
    }
  } else {
    console.log(err);
  }
});
