import '../styles/index.scss';

let audioPlayer;

function showLoading() {
  const topSongsContainer = document.getElementById('top_songs');
  topSongsContainer.innerHTML = `
    <div id="loading">
      <img src="public/spinner.svg">
    </div>
  `;
}

async function loadSongs() {
  showLoading();
  const type = document.getElementById('type_select').value;
  const quantity = document.getElementById('quantity_select').value;
  const url = `https://itunes.apple.com/us/rss/${type}/all/limit=${quantity}/json`;
  const response = await fetch(url, { mode: 'cors' });
  const data = await response.json();
  showSongs(data.feed.entry);
}

function showSongs(songs) {
  const topSongsContainer = document.getElementById('top_songs');
  topSongsContainer.innerHTML = '';
  songs.forEach(song => {
    const name = song['im:name'].label;
    const imgUrl = song['im:image'][1].label;
    const previewUrl = song.link[1] ? song.link[1].attributes.href: null;
    const artist = song['im:artist'].label;
    const songHTML = `
      <div class="song-item" previewUrl="${previewUrl}">
        <img
          class="${previewUrl ? 'btn song-item-img' : 'song-item-img'}"
          src="${imgUrl}"
          alt="${name}"
        />
        <div class="song-name">${name}</div>
        <div class="song-artist">${artist}</div>
        ${previewUrl ? '<div class="song-preview">Preview</div>' : ''}
      </div>
      `;
      topSongsContainer.insertAdjacentHTML("beforeend", songHTML);
  });
  const onPreview = e => {
    const previewUrl = e.target.parentNode.getAttribute('previewUrl');
    playPreview(previewUrl)
  }
  const imgs = document.getElementsByClassName('song-item-img');
  const previews = document.getElementsByClassName('song-preview');
  imgs.forEach(img => {
    img.addEventListener('click', onPreview);
  });
  previews.forEach(preview => {
    preview.addEventListener('click', onPreview);
  });
}

function playPreview(previewUrl) {
  if (audioPlayer) {
    audioPlayer.pause();
  }
  audioPlayer = new Audio(previewUrl);
  audioPlayer.play();
}

async function init() {
  await loadSongs();
}

function setupEvents() {
  document.getElementById('type_select').addEventListener('change', loadSongs);
  document.getElementById('quantity_select').addEventListener('change', loadSongs);
}

setupEvents();
init();