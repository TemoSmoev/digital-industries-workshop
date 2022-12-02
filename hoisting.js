console.log(a); // will print undefined
console.log(b); // will throw error
var a = 4;
let b = 4;

foo1(); // "hello world"
foo2(); // will throw Error

function foo1() {
  console.log("hello world");
}

const foo2 = function () {
  console.log("hello world");
};
