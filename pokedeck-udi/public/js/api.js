// Simple API helper
async function apiFetch(path, opts = {}) {
  const res = await fetch(path, opts);
  if (!res.ok) throw new Error('API error: ' + res.status);
  return res.json();
}

window.apiFetch = apiFetch;
