const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
const DIST_DIR = path.join(__dirname, '..', 'client', 'dist');

app.use(express.static(DIST_DIR));

app.listen(PORT, () => {
  console.log(`Example app listening at ${PORT}`);
});
