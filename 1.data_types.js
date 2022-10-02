// boolean
console.log("type of true - ", typeof true); // boolean
console.log("type of false - ", typeof false); // boolean

// null
console.log("type of null - ", typeof null); // object 😮 (yeah, it's a bug of js and typeof returns object on null, but in reality it's null type)

//undefined
console.log("type of undefined - ", typeof undefined); // undefined

//number
console.log("type of 5 - ", typeof 5); // number
console.log("type of -8 - ", typeof -8); // number
console.log("type of 6.99 - ", typeof 6.99); // number

//bigint
console.log("type of 9999999999999999n - ", typeof 9999999999999999n); // bigint
console.log(9999999999999999 === 10000000000000000); // true 😮, because these are numbers and number type has some bugs when using large values
console.log(9999999999999999n === 10000000000000000n); // false, bigint works good with bigints  👍

// string
console.log("type of 'hello world' - ", typeof "hello world"); // string

// symbol
console.log("type of Symbol('id') - ", typeof Symbol("id")); // symbol
