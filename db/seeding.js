const db = require('./index');

const data = [['1 app', 1],
  ['reachout', 5],
  ['Leetcode attempt', 0.5],
  ['leetcode easy', 1],
  ['leetcode medium', 5],
  ['leetcode hard', 10],
  ['pramp/mock interview', 5],
  ['git merge', 1],
  ['1 hour of good coding/research', 5],
  ['Networking event/coffee chat', 10],
  ['Phone screen', 10],
  ['Coding challege/take home', 50],
  ['Technical interview', 100],
  ['work out', 10],
  ['waking up before 10', 25],
  ['No ordering out', 5]];

for(let tuple of data) {
  db.query('INSERT INTO rubric (pointtype, pointworth) VALUES(?,?)', [tuple[0], tuple[1]]);
};
