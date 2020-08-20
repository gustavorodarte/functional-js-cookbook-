// Don't
const safeDiv = (a, b) => {
  if (b === 0) {
      return undefined
  }

  return a / b
}

console.log(safeDiv(20, 0) + 10) // Ops


// Do

const { Maybe } = require('crocks/Maybe');

const safeDiv = (a, b) => 0 === b
    ? Maybe.Nothing
    : Maybe.Just(a / b)

safeDiv(20, 0).chain(result => {
    console.log(result + 10) // Never falls here
})
