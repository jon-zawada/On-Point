const db = require('../db/index');

const getRubric = (callback) => {
  db.query('SELECT * FROM rubric', (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

module.exports = { getRubric };
