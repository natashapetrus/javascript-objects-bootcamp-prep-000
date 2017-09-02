var playlist = {'taylor swift' : 'love song'};

function updatePlaylist(playlist, artistName, songTitle){
  Object.assign(playlist, {[artistName] : songTitle});
}
