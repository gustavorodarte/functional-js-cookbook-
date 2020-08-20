// don't

const mage = 'Gandalf';
let result;

switch (mage) {
  case 'Gandalf':
    result = `${mage} is never late!`;
    break;
  case 'Merlin':
    result = `${mage} is powerful`;
    break;
  default:
    result = `Who is ${mage}?`;
}

console.log(result); // Gandalf is never Late

// do

const ifElse = require('crocks/logic/ifElse');
const hasProp = require('crocks/predicates/hasProp');

const cases = {
  Gandalf: (mage) => `${mage} is never late!'`,
  Merlin: (mage) => `${name} is powerful`,
  default: (mage) => `Who is ${name}?`,
};

const switchCase = (cases) => (key) => ifElse(hasProp, cases[key], cases.default)(key);

const getNameDescription = switchCase(cases);
console.log(getNameDescription('Gandalf')); // // Gandalf is never Late
