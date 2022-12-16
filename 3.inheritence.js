// Inheritence
class Animal {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
}

class Bear extends Animal {
  constructor(name, speed) {
    super(name, speed);
  }
  run() {
    console.log("I am running");
  }
}
class Fish extends Animal {
  constructor(name, speed) {
    super(name, speed);
  }
  swim() {
    console.log("I am swimming");
  }
}

const b = new Bear("bear", 20);
b.run();
const f = new Fish("fish", 15);
f.swim();
