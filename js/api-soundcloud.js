$(function() {
  
  var url = 'http://api.soundcloud.com/users/181202748/tracks?client_id=3d075533a7d38346207c15a7a6bbb170';
  $.getJSON(url, function(tracks) {
    
    var songlist = $('#soundcloud .songlist');
    songlist.find('*').remove();

    if (tracks.length > 0) {

      $(tracks).each(function(i, track) {

        var options;
        
        options = {
          title: track.title,
          url: track.permalink_url,
          description: track.description
        };

        if (track.artwork_url) {
          options.img = track.artwork_url.replace('large', 'crop');
        } else {
          options.img = '';
        }

        songlist.append(createTrackContainer(options));

      });

    }

  });

});