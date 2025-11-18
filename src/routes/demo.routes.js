const express = require('express');
const router = express.Router();

// Simple in-memory demo CRUD for illustrative purposes
let items = [
  { id: 1, name: 'Example Item 1' },
  { id: 2, name: 'Example Item 2' }
];
let nextId = 3;

router.get('/', (req, res) => {
  res.json(items);
});

router.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  const item = items.find(i => i.id === id);
  if (!item) return res.status(404).json({ error: 'Not found' });
  res.json(item);
});

router.post('/', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Name is required' });
  const item = { id: nextId++, name };
  items.push(item);
  res.status(201).json(item);
});

router.put('/:id', (req, res) => {
  const id = Number(req.params.id);
  const idx = items.findIndex(i => i.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  const { name } = req.body;
  items[idx].name = name || items[idx].name;
  res.json(items[idx]);
});

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  const idx = items.findIndex(i => i.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  const deleted = items.splice(idx, 1)[0];
  res.json(deleted);
});

module.exports = router;
