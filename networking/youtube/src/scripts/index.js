import '../styles/index.scss';

const apiKey = 'AIzaSyCSeYGW-eBSooVSeQ8ow5w1mnMZd6ARmhI';

const searchURL = 'https://content.googleapis.com/youtube/v3/search';

async function searchVideos(searchString='dua nhau di tron') {
  const url = `${searchURL}?part=snippet&q=${searchString}&key=${apiKey}&type=videos`;
  const response = await fetch(url);
  const data = await response.json();
  showVideos(data.items);
}

function setupEvents() {
  const inputBox = document.getElementById('search_input');
  inputBox.addEventListener('keyup', e => {
    if (e.code == 'Enter') {
      searchVideos(inputBox.value);
    }
  });

  document.getElementById('search_btn').addEventListener('click', () => {
    searchVideos(inputBox.value);
  });

  document.getElementById('search_results').addEventListener('click', (e) => {
    const videoId = e.target.getAttribute('video_id');
    if (videoId) {
      document.getElementById('video_player').innerHTML = `
        <iframe width="560" height="315"
          src="https://www.youtube.com/embed/${videoId}?autoplay=1"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>`
    }
  });
}

function showVideos(videos) {
  const searchResultsView = document.getElementById('search_results');
  searchResultsView.innerHTML = '';
  videos.forEach(video => {
    const resultViewHTML = `
      <div class="video-result" video_id="${video.id.videoId}">
        <img src="${video.snippet.thumbnails.default.url}" video_id="${video.id.videoId}" />
        <span video_id="${video.id.videoId}">${video.snippet.title}</span>
      </div>
    `;
    searchResultsView.insertAdjacentHTML('beforeend', resultViewHTML);
  });
}

async function init() {
  setupEvents();
  await searchVideos();
}

init();