$(function() {

  var songlist = $('#vimeo .songlist');
  songlist.find('*').remove();

  if (tracksList.vimeo.length) {

    $(tracksList.vimeo).each(function(i, track) {

      songlist.append(createTrackContainer({
        title: track.title,
        url: track.url,
        img: track.img,
        description: track.description
      }));

    });

  } else {

    $('.navbar-fixed-top').find('[href="#vimeo"]').closest('li').remove();
    $('#vimeo').remove();

  }

});
