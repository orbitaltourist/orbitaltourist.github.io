$(function() {

  var songlist = $('#youtube .songlist');
  songlist.find('*').remove();

  if (tracksList.youtube.length) {

    $(tracksList.youtube).each(function(i, track) {

      songlist.append(createTrackContainer({
        title: track.title,
        url: track.url,
        img: track.img,
        description: track.description
      }));

    });

  } else {

    $('.navbar-fixed-top').find('[href="#youtube"]').closest('li').remove();
    $('#youtube').remove();
    
  }

});
