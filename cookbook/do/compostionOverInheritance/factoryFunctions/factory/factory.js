const mage = () => {
  const spell = 'fireball';
  return {
    cast: () => console.log(spell),
  };
};

const gandalf = mage();
gandalf.cast();
