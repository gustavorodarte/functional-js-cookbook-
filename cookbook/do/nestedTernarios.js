/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// Conventional wisdom is sometimes unwise.

const withIf = ({
  conditionA, conditionB,
}) => {
  if (conditionA) {
    if (conditionB) {
      return valueA;
    }
    return valueB;
  }
  return valueC;
};

const withTernary = ({
  conditionA, conditionB,
}) => (
  (!conditionA)
    ? valueC
    : (conditionB)
      ? valueA
      : valueB
);
