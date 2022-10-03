// class Phone {
//   constructor(manufacturer, model, year) {
//     this.manufacturer = manufacturer;
//     this.model = model;
//     this.year = year;
//   }
//   ring = () => {
//     console.log("this phone is ringing");
//   };
// }

// const iphone = new Phone("Apple", "iphone 14", 2022);
// const galaxy = new Phone("Samsung", "galaxy s22", 2022);

// Encapsulation
// class Person {
//   #number; // number is a private attribute
//   constructor(name, age, number) {
//     this.name = name;
//     this.age = age;
//     this.#number = number;
//   }
//   getNumber = () => {
//     return this.#number.slice(0, -3).concat("***");
//   };
//   setnumber = (number) => {
//     this.#number = number;
//   };
// }
// const p = new Person("Temo", 18, "558330413");
// console.log(p.getNumber()); // 558330***
// console.log(p.#number); // error

// Inheritence
// class Animal {
//   constructor(name, speed) {
//     this.name = name;
//     this.speed = speed;
//   }
// }

// class Bear extends Animal {
//   constructor(name, speed) {
//     super(name, speed);
//   }
//   run() {
//     console.log("I am running");
//   }
// }
// class Fish extends Animal {
//   constructor(name, speed) {
//     super(name, speed);
//   }
//   swim() {
//     console.log("I am swimming");
//   }
// }

// const b = new Bear("bear", 20);
// b.run();
// const f = new Fish("fish", 15);
// f.swim();

// polimorphysm
// class Shape {
//   constructor(name) {
//     this.name = name;
//   }
// }
// class Rectangle extends Shape {
//   constructor(name, x, y) {
//     super(name);
//     this.x = x;
//     this.y = y;
//   }
//   calculatePerimeter = () => {
//     return 2 * (this.x + this.y);
//   };
// }
// class Triangle extends Shape {
//   constructor(name, x, y, z) {
//     super(name);
//     this.x = x;
//     this.y = y;
//     this.z = z;
//   }
//   calculatePerimeter = () => {
//     return this.x + this.y + this.z;
//   };
// }

// const r = new Rectangle("rectangle", 5, 10);
// const t = new Triangle("triangle", 5, 5, 5);

// console.log(r.calculatePerimeter());
// console.log(t.calculatePerimeter());
