console.log('pokemon.js loaded');

// Placeholder: load sample pokemon list
async function loadPokemon() {
  // Replace with real API calls later
  const sample = [
    { id: 1, name: 'Bulbasaur', type: 'grass' },
    { id: 2, name: 'Charmander', type: 'fire' }
  ];
  const root = document.getElementById('pokemon-root') || document.getElementById('pokemon-detail-root');
  if (root) {
    root.innerHTML = '<pre>' + JSON.stringify(sample, null, 2) + '</pre>';
  }
}

loadPokemon();
