const grimoire = () => {
  const fireball = 'fireball';
  const telekinesis = 'telekinesis';
  return {
    castFireball: () => console.log(fireball),
    castTelekinesis: () => console.log(telekinesis),
  };
};

const mage = ({
  spellBook,
}) => {
  const spellCastMap = {
    fireball: spellBook.castFireball,
    telekinesis: spellBook.castTelekinesis,
  };
  return {
    castSpell: (spellName) => {
      const spellToCast = spellCastMap[spellName];
      return spellToCast(spellName);
    },
  };
};

const spellBook = grimoire();
const gandalf = mage({ spellBook });
gandalf.castSpell('fireball');
