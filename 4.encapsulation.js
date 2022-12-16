//Encapsulation

class Person {
  #number; // number არის პრივატული თვისება (private attribute)
  constructor(name, age, number) {
    this.name = name;
    this.age = age;
    this.#number = number;
  }
  getNumber = () => {
    return this.#number.slice(0, -3).concat("***");
  };
  setnumber = (number) => {
    this.#number = number;
  };
}
const p = new Person("Temo", 18, "558330413");
console.log(p.getNumber()); // 558330***
console.log(p.#number); // error
