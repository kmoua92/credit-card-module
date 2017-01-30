/*jshint esversion: 6*/
// import cards from './cards';
// import itree from './intervalTree';
const cards = require('./cards');
const itree = require('./intervalTree');

class CreditCard {
  constructor(obj) {
    this.number = obj.number;
    this.cvv = obj.cvv;
    this.expDate = obj.expDate;
    this.cardType = this.getCardType();
  }

  getCardType() {
    let sliceEnd = 6;

    let cardType;

    while (sliceEnd > 0) {
      const truncatedNumber = Number(this.number.toString().slice(0,sliceEnd));
      const searchResult = itree.search(truncatedNumber); // itree should be imported from another file
      if (searchResult.length > 0) {
        cardType = searchResult[0].id.split(' ').slice(0,-1).join(' ');
        break;
      } else {
        sliceEnd--;
      }
    }

    return cardType;
  }

  hasValidNumber() {
    const stringifiedNum = this.number.toString();
    const hasValidLength = !!this.cardType && cards[this.cardType].validLengths.indexOf(stringifiedNum.length) !== -1;

    let numbersSummed = 0;
    // double every other number from right to left
    for (let i = stringifiedNum.length - 1; i >= 0; i--) {
      if (i % 2 === 0) {
        const doubled = Number(stringifiedNum[i]) * 2;
        // split any double digits
        doubled.toString().split('').forEach(digitStr => {
          numbersSummed += Number(digitStr);
        });
      } else {
        numbersSummed += Number(stringifiedNum[i]);
      }
    }

    const isMod10 = numbersSummed % 10 === 0;

    return hasValidLength && isMod10;
  }

  hasValidCVV() {
    return !!this.cardType && this.cvv.toString().length === cards[this.cardType].cvvLength;
  }

  isNotExpired() {
    const date = new Date();
    const currentMonth = date.getMonth() + 1;
    const currentYear = Number(date.getFullYear().toString().split('').slice(-2).join(''));
    return this.expDate.year >= currentYear && this.expDate.month >= currentMonth;
  }

  showFirstSixLastFour() {
    const stringifiedNumbers = this.number.toString().split('');
    stringifiedNumbers.forEach((digitStr, index) => {
      if (index > 6 && index < stringifiedNumbers.length - 4) {
        stringifiedNumbers[index] = 'x';
      }
    });
    return stringifiedNumbers.join('');
  }

  showLastFour() {
    const stringifiedNumbers = this.number.toString().split('');
    stringifiedNumbers.forEach((digitStr, index) => {
      if (index < stringifiedNumbers.length - 4) {
        stringifiedNumbers[index] = 'x';
      }
    });
    return stringifiedNumbers.join('');
  }

  validate() {
    const validation = {
      cardType: this.getCardType() || 'NOT SUPPORTED',
      hasValidNumber: this.hasValidNumber(),
      hasValidCVV: this.hasValidCVV(),
      isNotExpired: this.isNotExpired()
    };

    const isValid = !!this.getCardType() && this.hasValidNumber() && this.hasValidCVV() && this.isNotExpired();

    return [isValid, validation];
  }
}