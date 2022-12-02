// global scope
const a = 1;

function foo() {
  // foo scope
  const a = 2;
  console.log(a); // 2
}

console.log(a); // 1
