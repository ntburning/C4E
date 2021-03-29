import '../styles/index.scss';

const baseUrl = 'https://pokeapi.co/api/v2/pokemon';

function setupEvents() {
  document.getElementById('search_btn').addEventListener('click', loadPokemon);
  document.getElementById('search_input').addEventListener('keyup', e => {
    if (e.key == "Enter") {
      loadPokemon();
    }
  });
}

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

async function loadPokemon() {
  clearPokemon();
  let data = null;
  try {
    const pokemonName = document.getElementById('search_input').value;
    const url = `${baseUrl}/${pokemonName}`;
    const response = await fetch(url);
    data = await response.json();
  }
  catch(e) {
    document.getElementById('message').textContent = 'Not found';
  }
  showPokemon(data);
}

function clearPokemon() {
  document.getElementById('message').textContent = '';
  document.getElementById('name').textContent = '';
  document.getElementById('pokemon_image').src = '';
  document.getElementById('abilities_count').textContent = '';
  document.getElementById('moves_count').textContent =  '';
}

function showPokemon(pokemon) {
  document.getElementById('name').textContent = capitalize(pokemon.name);
  document.getElementById('pokemon_image').src = pokemon.sprites.front_default;
  document.getElementById('abilities_count').textContent = `${pokemon.abilities.length} abilitie(s)`;
  document.getElementById('moves_count').textContent = `${pokemon.moves.length} move(s)`;
}

setupEvents();
loadPokemon();