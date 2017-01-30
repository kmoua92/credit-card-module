/*jshint esversion: 6*/
const cards = {
  'American Express': {
    prefixes: [34, 37],
    validLengths: [15],
    cvvLength: 4
  },
  'China UnionPay': {
    prefixes: [62, 88],
    validLengths: [16,17,18,19],
    cvvLength: 3
  },
  'Diners ClubCarte Blanche': {
    prefixes: [[300,305]],
    validLengths: [14],
    cvvLength: 3
  },
  'Diners Club International': {
    prefixes: [[300,305], 309, 36, 38, 39],
    validLengths: [14],
    cvvLength: 3
  },
  'Diners Club US & Canada': {
    prefixes: [54, 55],
    validLengths: [16],
    cvvLength: 3
  },
  'Discover Card': {
    prefixes: [6011, [622126,622925], [644,649], 65],
    validLengths: [16,19],
    cvvLength: 3
  },
  'JCB': {
    prefixes: [[3528,3589]],
    validLengths: [16],
    cvvLength: 3
  },
  'Laser': {
    prefixes:[6304, 6706, 6771, 6709],
    validLengths: [16,17,18,19],
    cvvLength: 3
  },
  'Maestro': {
    prefixes:[5018, 5020, 5038, 5612, 5893, 6304, 6759, 6761, 6762, 6763, 0604, 6390],
    validLengths: [12,13,14,15,16,17,18,19],
    cvvLength: 3
  },
  'Dankort': {
    prefixes: [5019],
    validLengths: [16],
    cvvLength: 3
  },
  'MasterCard': {
    prefixes: [[50,55]],
    validLengths: [16],
    cvvLength: 3
  },
  'Visa': {
    prefixes: [4],
    validLengths: [13, 16],
    cvvLength: 3
  },
  'Visa Electron': {
    prefixes: [4026, 417500, 4405, 4508, 4844, 4913, 4917],
    validLengths: [16],
    cvvLength: 3
  }
};

// export default cards;
module.exports = cards;