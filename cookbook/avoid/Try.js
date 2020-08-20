// don't

try {
  undefined.property;
} catch (err) {
  console.log(err);
}

// do

const tryCatch = require('crocks/Result/tryCatch');

tryCatch(() => {
  throw new Error('Simple error!');
})();

// Err "Simple error!"
