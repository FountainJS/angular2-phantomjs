const Horseman = require('node-horseman');
const horseman = new Horseman();

horseman
  .open('http://localhost:3000/')
  .on('error', (msg, trace) => {
    console.log('[Error message]', msg);
    console.log('[Error trace]', trace);
  })
  .waitForSelector('h3')
  .exists('h3')
  .then(result => {
    console.log('h3 exists ? ', result);
  })
  .count('h3')
  .then(result => {
    console.log('horse', result);
  });
