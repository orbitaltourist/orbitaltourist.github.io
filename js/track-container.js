function createTrackContainer(options) {

  var options;

  if (!options.description) {
    options.description = '';
  }

  return $(
    '<a href="' + options.url + '" target="_blank" class="songlist-song">' +
    '<h3 class="songlist-song-title">' + options.title + '</h3>' +
    '<img src="' + options.img + '" alt="' + options.title + '" class="songlist-song-img" />' +
    '<div class="songlist-song-desc">' +
    '<p>' + options.description + '</p>' +
    '</div>' +
    '</a>'
  );

}