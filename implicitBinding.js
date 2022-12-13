/**
 * calling function declaration from object will have the object itself as "this" context
 */
function foo() {
  console.log(this);
}

const obj = {
  a: 2,
  foo: foo, // "this" context for foo function from here will be "obj" itself
};

obj.foo(); // { a : 2 , foo }
foo(); // Window

/**
 * arrow function will borrow this from the parent function
 * parent function for obj1.sayMyName is global scope,
 * so it will take Window object as "this" context
 */
const foo1 = () => {
  console.log(this.name);
};

const obj1 = {
  name: "Jack",
  sayMyName: foo1,
};
obj1.sayMyName();
