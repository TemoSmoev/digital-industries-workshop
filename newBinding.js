/** we can create functions from constructor functions
 * constructor functions are normal function declarations
 * we can say that a function is constructor only when we execute the function with "new" keyword
 * let's see an example
 */

function Person(name, age) {
  this.name = name; // this is referred to the object that will be created
  this.age = age; // we add name and age to the object that will have parameters value
}

const person1 = new Person("Alex", 24); // passing arguments ('Alex' will be assigned to this.name and 24 to this.age)
console.log(person1); // {name:'Alex',age:24}
