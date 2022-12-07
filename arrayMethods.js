// tasks:

/**
 * 1. მოცემულია ერეი [1,2,3,4,5], გამოიტანეთ რიცხვები პირველი ინდექსიდან მესამე ინდექსამდე რომ მიიღოთ [2,3,4]
 * 2. მოცემულია ერეი [1,2,3,4,5], დავწეროთ ფუნქცია, რომელიც გამოიტანს ბოლო 3 ელემენტს ერეიში,
 * 3. მოცემულია ერეი ["yellow", "green", "blue", "orange"], უნდა დავბეჭდოთ ერეიში მოცემული სტრიქონები " " დაშორებით ერთ სტრიქონად
 * 4. მოცემულია
 */

// small talk about mutation with examples

// push (mutates the state)
// small note that const variables are mutable, only reasignment (=) is not available
const arr1 = [1, 2, 3];
arr1.push(1);
arr1.push(2);
console.log(arr1); // [ 1, 2, 3, 1, 2 ]

// unshift (mutates the state)
const arr2 = [1, 2, 3];
arr2.unshift(1);
arr2.unshift(2);
console.log(arr2); // [ 2, 1, 1, 2, 3 ]

// splice (mutates the array)
const arr3 = ["yellow", "green", "blue", "orange"];
arr3.splice(1, 2); // პირველი ინდექსიდან (მისი ჩათვლით) აიღებს ორ ელემენტს
console.log(arr3); // [ 'yellow', 'orange' ]

// slice
const arr4 = ["yellow", "green", "blue", "orange"];
const newArr4 = arr4.slice(1, 2); // პირველი ინდექსიდან (მისი ჩათვლით) მეორე ინდექსამდე (არჩათვლით) აიღებს ელემენტებს
console.log(newArr4); //

// join (returns a string from an array, where all elements are concatenated)
const arr5 = ["yellow", "green", "blue", "orange"];
console.log(arr5.join());
console.log(arr5.join(" + "));

// reverse (mutates the array)
const arr6 = [1, 2, 3, 4, 5];
arr6.reverse();
console.log(arr6);

// foreach is the shortened for loop
const arr10 = [1, 2, 3, 4, 5];
arr10.forEach((el, i) => {
  console.log(el);
});

// map (changes elements in an array)
const arr7 = [1, 2, 3, 4, 5];
const aMultiply2 = arr7.map((element) => {
  return element * 2;
});
console.log(aMultiply2); // [2,4,6,8,10]

// filter (filters out unnecessary elements from our array)
const arr8 = [1, 2, 3, 4, 5, 6];
const arr8Even = arr8.filter((element) => element % 2 === 0);
console.log(arr8Even); // [ 2, 4, 6 ]

// some
const arr9 = ["John", "Ana", "Alex", "Max"];
const isAnaInArr9 = arr9.some((el) => el === "Ana");
console.log(isAnaInArr9);

const arr11 = [1, 2, 3, 4, 5];
const arr11Sum = arr11.reduce((acc, current) => acc + current);
console.log(arr11Sum); // 15
