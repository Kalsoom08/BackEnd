const express = require('express');
const app = express();

app.use((req, res, next) => {
  const now = new Date().toISOString();
  console.log(`[${now}] ${req.method} ${req.originalUrl}`);
  next(); 
});

app.use((req, res, next) => {
  const apiKey = 'my-secret-key'
;
  if (!apiKey || apiKey !== 'my-secret-key') {
    
    return res.status(401).json({ error: 'Unauthorized: Invalid or missing API key' });
  }

  next(); 
});
app.get('/', (req, res) => {
  res.json({ message: 'You have accessed secure data!' });
});


app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
