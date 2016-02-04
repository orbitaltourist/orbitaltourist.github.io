$(function() {

  var songlist = $('#bandcamp .songlist');
  songlist.find('*').remove();

  if (tracksList.bandcamp.length) {
    
    $(tracksList.bandcamp).each(function(i, track) {

      songlist.append(createTrackContainer({
        title: track.title,
        url: track.url,
        img: track.img,
        description: track.description
      }));

    });

  } else {

    $('.navbar-fixed-top').find('[href="#bandcamp"]').closest('li').remove();
    $('#bandcamp').remove();
    
  }

});
