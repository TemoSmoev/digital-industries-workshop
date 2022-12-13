/**
 * by default function that is not called as a method (from an object) or as a
 * constructor function or class (we will speak about constructors and classes later)
 * will have Window object for "this" context
 */

console.log(this); // window object

function func() {
  console.log(this);
  function innerFunc() {
    console.log(this);
  }
  innerFunc();
}

func(); // window object (2x)

console.log("-----------------------");

/**
 * arrow function borrows the context from it's parent function
 * for func1 it's global scope, which "this" context is Window
 * for innerFunc it's func1 which "this" context is context of func1 that as we already know is Window
 * */
const func1 = () => {
  console.log(this); // Window object
  const innerFunc = () => {
    console.log(this); // Window object
  };
  innerFunc();
};
func1();
