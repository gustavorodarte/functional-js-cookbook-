const getSecret = (secret) => ({
  get: () => secret,
});

const obj = getSecret(2);
const mySecret = obj.get();

console.log(mySecret); // 2
