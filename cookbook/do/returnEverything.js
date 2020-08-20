// Don't
let result = 1;
for (let i = 2; i <= 5; i++) {
  result *= i;
}

console.log('Fact of 5: ', result);

// Do
const fact = (n) => (n === 0
  ? 1
  : n * fact(n - 1));

console.log('Fact of 5: ', fact(5));
