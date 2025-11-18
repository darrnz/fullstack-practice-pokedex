console.log('users.js loaded');

// Example: fetch demo items from /demo
async function loadUsers() {
  try {
    const res = await fetch('/demo');
    const items = await res.json();
    console.log('Demo items (used as users sample):', items);
  } catch (err) {
    console.error(err);
  }
}

loadUsers();
