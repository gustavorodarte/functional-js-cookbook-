// don't
console.log(
  sum(map((x) => x + 1, range(0, 100))),
);

// do

const transform = pipe(map(inc), sum);

console.log(transform(range(0, 100)));
