class Grimoire {
  constructor() {
    this.fireball = 'fireball';
    this.telekinesis = 'telekinesis';
  }

  castFireBall() {
    console.log(this.fireball);
  }

  castTelekinesis() {
    console.log(this.telekinesis);
  }
}

class Mage {
  constructor(spellBook) {
    this.spellBook = spellBook;
  }

  get spellCastMap() {
    return {
      fireball: this.spellBook.castFireBall.bind(this.spellBook),
      telekinesis: this.spellBook.castTelekinesis,
    };
  }

  castSpell(spellName) {
    const spellToCast = this.spellCastMap[spellName];
    return spellToCast(spellName);
  }
}

const spellBook = new Grimoire();
const gandalf = new Mage(spellBook);
gandalf.castSpell('fireball');
