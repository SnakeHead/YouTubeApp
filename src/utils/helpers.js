var axios = require("axios");
import API_KEY from '../config/config';

var helpers = {
  getVideoByKeyword: function(movieName, order) {

    var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&order=" + order + "&key=" + API_KEY + "&q=" + movieName
    return axios.get(queryURL).then(function(response) {
      console.log(response.data.items);
      return response.data.items;
    });
  }
};

module.exports = helpers;
