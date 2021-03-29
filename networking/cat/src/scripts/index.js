import '../styles/index.scss';

let catUrl;

async function loadCat() {
  const url = 'https://api.thecatapi.com/v1/images/search?size=full';
  const data = await (await fetch(url)).json();
  const catData = data[0];
  console.log(catData);
  catUrl = catData.url;
}

function showCat() {
  document.getElementById('cat_img').src = catUrl;
}

function setupEvents() {
  document.getElementById('settings').addEventListener('click', async () => {
    await loadAndShowCat();
  });
}

async function loadAndShowCat() {
  await loadCat();
  showCat();
}

setupEvents();
loadAndShowCat();