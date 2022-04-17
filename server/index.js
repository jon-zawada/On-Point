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

app.listen(PORT, () => {
  console.log(`Example app listening at ${PORT}`);
});
