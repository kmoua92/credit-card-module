/*jshint esversion: 6*/
// import IntervalTree from 'interval-tree2';
// import cards from './cards';
const IntervalTree = require('interval-tree2');
const cards = require('./cards');

const itree = new IntervalTree(622500);

for (const cardName in cards) {
  // add to interval tree
  const prefixes = cards[cardName].prefixes; // array of prefixes
  let unique = 0;
  prefixes.forEach(prefix => {
    if (Array.isArray(prefix)) {
      itree.add(prefix[0], prefix[1], `${cardName} ${++unique}`); // id must be unique
    } else {
      itree.add(prefix, prefix+0.1, `${cardName} ${++unique}`); // id must be unique
    }
  });
}

// export default itree;
module.exports = itree;