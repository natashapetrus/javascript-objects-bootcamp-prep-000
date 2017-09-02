var playlist = {'taylor swift' : 'love song'};

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign(playlist, {[artistName] : songTitle});
}
