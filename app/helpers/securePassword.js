const casual = require('casual');

const lowercaseLetter = () =>
  casual.random_element('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''));
const uppercaseLetter = () =>
  casual.random_element('abcdefghijklmnopqrstuvwxyz'.split(''));
const specialCharacter = () => casual.random_element('~!@#$%^*()_+'.split(''));
const number = () => casual.random_element('0123456789'.split(''));
const anyCharacter = () =>
  casual.random_element([
    lowercaseLetter(),
    uppercaseLetter(),
    specialCharacter(),
    number(),
  ]);

const securePassword = () => {
  const length = casual.integer(8, 16);
  const pw = [
    lowercaseLetter(),
    uppercaseLetter(),
    specialCharacter(),
    number(),
  ];

  while (pw.length < length) {
    pw.push(anyCharacter());
  }
  return pw.join('');
};

module.exports = securePassword;
