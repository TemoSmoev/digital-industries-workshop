// let's copy primitive values
let a = 5;
let b = a;
b = 3;
console.log(a); // 5
console.log(b); // 3

// let's copy object
let obj1 = { name: "John", age: 45 };
let obj2 = obj1;
obj2.age = 22;
console.log(obj1);
/**
 * {... age:22} we changed second object
 *  but the value of first object was also changed
 *  */
