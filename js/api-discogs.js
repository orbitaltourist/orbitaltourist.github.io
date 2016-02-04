$(function() {

  var songlist = $('#discogs .songlist');
  songlist.find('*').remove();

  if (tracksList.discogs.length) {

    $(tracksList.discogs).each(function(i, track) {

      songlist.append(createTrackContainer({
        title: track.title,
        url: track.url,
        img: track.img,
        description: track.description
      }));

    });

  } else {

    $('.navbar-fixed-top').find('[href="#discogs"]').closest('li').remove();
    $('#discogs').remove();
    
  }

});
