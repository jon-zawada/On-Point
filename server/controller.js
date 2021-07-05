const Models = require('./models');

const getRubric = (req, res) => {
  Models.getRubric((err, data) => {
    if (err) {
      res.status(404).send();
    } else {
      res.send(data);
    }
  });
};

module.exports = { getRubric };
