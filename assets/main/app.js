String.prototype.hasVowels = function() {
  var vowels = /[aeiou]/i;
  return vowels.test(this);
};

String.prototype.toUpper = function() {
  var upperCased = '';
  for (var index = 0; index < this.length; index++) {
    var currentValue = this.charCodeAt(index);
    if (currentValue > 96 && currentValue < 123) {
      upperCased += String.fromCharCode(currentValue & ~(1 << 5));
    } else {
      upperCased += this[index];
    }
  }
  return upperCased;
};

String.prototype.toLower = function() {
  var lowerCased = '';
  for (var index = 0; index < this.length; index++) {
    var currentValue = this.charCodeAt(index);
    if (currentValue > 64 && currentValue < 91) {
      lowerCased += String.fromCharCode(currentValue + 32);
    } else {
      lowerCased += this[index];
    }
  }
  return lowerCased;
};

String.prototype.ucFirst = function() {
  return /[a-zA-Z]/.exec(this)[0].toUpper() + this.substring(1).toLower();
};

String.prototype.isQuestion = function() {
  return /^\w.+\?$/.test(this);
};

String.prototype.words = function() {
  return this.match(/\w/g);
};

String.prototype.wordCount = function() {
  return this.words().length;
};

String.prototype.toCurrency = function() {
  /^([0-9]+)[.]?([0-9]{1,2})/.test(this);
  return Number(this)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

String.prototype.fromCurrency = function() {
  var value = /(\d+,)+/;
  return value.test(this)
    ? this.replace(/,(?=\d)/g, '')
    : 'Wrong number format.';
};

String.prototype.invertCase = function() {
  var inverted = '';
  for (var index = 0; index < this.length; index++) {
    /[a-z]/.test(this[index])
      ? (inverted += this[index].toUpper())
      : (inverted += this[index].toLower());
  }
  return inverted;
};

String.prototype.alternateCase = function() {
  var alternatedString = /[a-zA-Z]/.exec(this)[0].toLower() + this[1].toUpper();
  for (var index = 2; index < this.length; index++) {
    index % 2 === 0
      ? (alternatedString += this[index].toLower())
      : (alternatedString += this[index].toUpper());
  }
  return alternatedString;
};

String.prototype.numberWords = function() {
  var numberKeys = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine'
  ];
  var wordNumbers = [];
  for (var index = 0; index < this.length; index++) {
    wordNumbers.push(numberKeys[this[index]]);
  }
  return wordNumbers.join(' ');
};

String.prototype.isDigit = function() {
  return /(\d)(?=\d+)/.test(this) ? false : true;
};
module.exports = String;
