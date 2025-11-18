console.log('decks.js loaded');

async function loadDecks() {
  const sample = [
    { id: 1, name: 'Starter Deck', userId: 1 },
  ];
  const root = document.getElementById('decks-root') || document.getElementById('deck-detail-root');
  if (root) root.innerHTML = '<pre>' + JSON.stringify(sample, null, 2) + '</pre>';
}

loadDecks();
