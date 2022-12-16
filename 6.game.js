class Character {
  constructor(name, hp, power) {
    this.name = name;
    this.hp = hp;
    this.power = power;
  }
  attack = (character) => {
    character.takeDamage(this.power);
  };
  takeDamage = (power) => {
    this.hp = this.hp - power;
  };
  logStatus = () => {
    const status = this.hp > 0 ? `${this.name} --- power: ${this.power}; hp: ${this.hp}hp` : `${this.name} is dead`;
    console.log(status);
  };
  getHp = () => {
    return this.hp;
  };
}

class Hero extends Character {
  attackCounter = 0;
  constructor(name, hp, power) {
    super(name, hp, power);
  }
  increaseHp = () => {
    this.attackCounter++;
    if (this.attackCounter % 3 === 0) {
      this.hp += 20;
    }
  };
  attack = (character) => {
    this.increaseHp();
    character.takeDamage(this.power);
  };
}

class Villain extends Character {
  attackCounter = 0;
  constructor(name, hp, power) {
    super(name, hp, power);
  }
  increasePower = () => {
    this.attackCounter++;
    if (this.attackCounter % 3 === 0) {
      this.power += 10;
    }
  };
  attack = (character) => {
    this.increasePower();
    character.takeDamage(this.power);
  };
}

const mainVillain = new Villain("Villain", 200, 20);
const mainHero = new Hero("Hero", 150, 30);

while (mainHero.getHp() > 0 && mainVillain.getHp() > 0) {
  mainVillain.logStatus();
  mainHero.logStatus();
  mainVillain.attack(mainHero);
  mainHero.attack(mainVillain);
  console.log("-------");
}
