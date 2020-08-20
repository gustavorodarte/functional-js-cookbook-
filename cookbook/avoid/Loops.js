// don't

const even = []
for (let i = 0; i <= 300; i++) {
    if (i % 2 === 0) {
        even.push(i)
    }
}

console.log(even) // [0, 2, 4, 6, 8 ...

// do

import { filter, range } from 'ramda';

const even = filter(n => n % 2 === 0)

console.log(even(range(0, 300))) // [0, 2, 4, 6, 8 ...]