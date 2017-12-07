const bestPractices = require('./rules/best-practices');
const possibleErrors = require('./rules/possible-errors');

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: '6',
    sourceType: 'module'
  },
  rules: {
    ...possibleErrors,
    ...bestPractices
  }
};
