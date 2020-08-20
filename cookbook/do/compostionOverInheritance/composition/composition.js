const caster = ({ spellName }) => ({
  cast: () => console.log(`I cast ${spellName}`),
});
const flying = ({ position }) => ({
  fly: () => console.log(`flying to position ${position}`),
});
const killer = (state) => ({
  kill: () => console.log('kill'),
});

const flyingMonsterMage = (spellName) => {
  const state = {
    spellName,
    position: 0,
  };
  return {
    ...caster(state),
    ...flying(state),
    ...killer(state),
  };
};
const monster = flyingMonsterMage('fireball');
monster.cast(); // "I, cast fireball
