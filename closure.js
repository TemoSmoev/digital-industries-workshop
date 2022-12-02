const counter = () => {
  let value = 0;

  return () => {
    value++;
    return value;
  };
};

const c1 = counter();
const c2 = counter();

console.log(c1());
console.log(c1());
console.log(c2());
