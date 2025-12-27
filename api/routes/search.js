import express from 'express';

const router = express.Router();

// Search endpoint
router.get('/', (req, res) => {
  const query = req.query.q;
  
  if (!query) {
    return res.status(400).json({ error: 'Search query is required' });
  }

  // Placeholder search response
  res.json({
    query,
    results: [],
    source: 'Bubble Backend Search API',
    timestamp: new Date().toISOString()
  });
});

export default router;
