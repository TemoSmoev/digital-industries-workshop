function foo() {
  console.log(this.a);
}

var obj1 = {
  a: 1,
};
var obj2 = {
  a: 2,
};
var obj3 = {
  a: 3,
};

/** with "call","apply" and "bind" methods we can explicitly define context for function */

foo.call(obj1); // 1
foo.apply(obj2); // 2
const fooWithObjContext = foo.bind(obj3);
fooWithObjContext(); // 3

/** note that we can't define context for arrow functions */

const foo1 = () => {
  console.log(this);
};
foo1.call(obj3); // foo will still print Window object
