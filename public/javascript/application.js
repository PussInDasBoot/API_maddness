$(function () {

  var apiKey = cc31c65a27ed99826b636f0f05a91807

  $.ajax({
    url: 'https://api.flickr.com/services/rest',
    method: 'flickr.photos.getRecent',
    data: {
      tag: "lighthouse",
      format: json
      api_key: apiKey
    },
    dataType: 'jsonp',
    success: function (json) {
      console.log(json);
    },
    error: function (err) {
      console.log('dealing with it');
      // TODO Deal with it!
    }
  });

});
