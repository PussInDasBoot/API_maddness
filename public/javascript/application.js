$(function () {

  var apiKey = "cc31c65a27ed99826b636f0f05a91807";

  var Templates = {}

  // function init(){
  //   var imageTemplateHTML = $('#image-template').html();
  //   // The template function for producing HTML
  //   Templates.image = Handlebars.compile(imageTemplateHTML);
  // }

  // init();

  $.ajax({
    url: 'https://api.flickr.com/services/rest',
    method: 'get',
    data: {
      method: "flickr.tags.getClusterPhotos",
      tag: "lighthouse",
      cluster_id: "3",
      format: "json",
      api_key: apiKey,

    },
    dataType: 'jsonp',
    jsonpCallback: 'jsonFlickrApi',
    success: function (data) {
      console.log(data);
      for (var i = 0; i < 10; i++) {
        var id = data.photos.photo[i].id;
        var secret = data.photos.photo[i].secret;
        var serverid = data.photos.photo[i].server;
        var farmid = data.photos.photo[i].farm;
        var imageUrl = "http://farm" + farmid + ".static.flickr.com/" + serverid + "/" + id + "_" + secret + ".jpg";
        $('.images').append('<img src='+imageUrl+' class="imgsize">');
        
        }
        $('.images').slick({
          autoplay: true,
          autoplaySpeed: 1500,
          fade: true
        })
    },
    error: function (err) {
      console.log('dealing with it');
      // TODO Deal with it!
    }
  });

});
