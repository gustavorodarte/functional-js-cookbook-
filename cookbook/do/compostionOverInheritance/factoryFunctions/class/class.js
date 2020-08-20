class Mage {
  constructor() {
    this.spell = 'fireball';
  }

  cast() {
    console.log(this.spell);
  }
}

const gandalf = new Mage();
gandalf.cast();
