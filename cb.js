const arr = [1, 2, 3, 4, 5];
// const handleElements = (el,i) => {
//   console.log(el);
// };

// arr.forEach(handleElements);

Array.prototype.customForEach = function (cb) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(cb(this[i]));
  }
  return arr;
};
Array.prototype.customMap = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i]);
  }
};

const newArr = [1, 2, 3, 4].map((el) => el + 2);
console.log(newArr);
