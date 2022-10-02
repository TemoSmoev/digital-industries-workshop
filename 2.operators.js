// Arithmetic Operators
console.log(9 + 4); // 13
console.log(9 * 4); // 36
console.log(9 % 4); // 1
console.log(5 + "4"); // "54"

// Assignment Operators
let a = 6;
a += 7; // the same as a=a+7

// Comparison Operators
console.log(5 === 5); // true
console.log(5 == "5"); // false
console.log(5 > 10); // false
console.log(5 >= 5); // true
console.log(true ? "yes" : "no"); //yes

// Logical Operators
console.log(true && false); // false
console.log(true && true); // true
console.log(false && true); // false
console.log(true && "hello world"); // hello world
console.log(false && "hello world"); // false
// logical && with some falsy values
console.log("" && "hello world"); // ''
console.log(undefined && "hello world"); // undefined
console.log(null && "hello world"); // null
console.log(NaN && "hello world"); // NaN
console.log(0 && "hello world"); // 0
console.log(-0 && "hello world"); // -0
// logical && with some truthy values
console.log(4 && "hello world"); // hello world
console.log("0" && "hello world"); // hello world, '0' is a string with one symbol, it's not 0 number
console.log({} && "hello world"); // hello world
console.log([] && "hello world"); // hello world
console.log(function () {} && "hello world"); // hello world
// logical || with some falsy values
console.log("" || "hello world"); // "hello world"
console.log(undefined && "hello world"); // "hello world"
console.log(null && "hello world"); // "hello world"
console.log(NaN && "hello world"); // "hello world"
console.log(0 && "hello world"); // "hello world"
console.log(-0 && "hello world"); // "hello world"
// logical || with some truthy values
console.log(4 && "hello world"); // 4
console.log("0" && "hello world"); // '0'
console.log({} && "hello world"); // {}
console.log([] && "hello world"); // []
console.log(function () {} && "hello world"); // function(){}
// logical ! operator
console.log(!true); // false
console.log(!false); // true
// logical ! operator with falsy values are always true
console.log(!0); // true
console.log(!""); // true
console.log(!undefined); // true
console.log(!NaN); // true
console.log(!null); // true
console.log(!5); // false
// logical ! operator with truthy values are always false
console.log(!"4"); // false
console.log(!4); // false
console.log(!{}); // false
console.log(![]); // false
