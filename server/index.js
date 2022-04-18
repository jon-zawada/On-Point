const express = require('express');
const path = require('path');
const Controller = require('./controller');

const app = express();
const PORT = 3000;
const DIST_DIR = path.join(__dirname, '..', 'client', 'dist');

app.use(express.static(DIST_DIR));

// get rubric

app.get('/api/rubric', Controller.getRubric);
// get rewards
app.get('*', (req, res) => {
  res.sendFile(path.resolve(DIST_DIR, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Example app listening at ${PORT}`);
});
