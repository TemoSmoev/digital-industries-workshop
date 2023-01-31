// 1
const getPerimeter = (a, b) => {
  return 2 * (a + b);
};
getPerimeter(5, 10); // 30

// 2
const celsiusToFarenheit = (c) => {
  return (c * 9) / 5 + 35;
};
celsiusToFarenheit(5);

// 3
const countVowels1 = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "e" || str[i] === "u" || str[i] === "i" || str[i] === "o" || str[i] === "a") {
      count++;
    }
  }
  return count;
};
countVowels1("hello"); // 2

// 3 დავალების უფრო ლამაზი ვარიანტი
const countVowels2 = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
};

// 4
const checkIsPalindrome = (str) => {
  const strLastIndex = str.length - 1;
  let isPalindrome = true;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[strLastIndex - i]) {
      isPalindrome = false;
    }
  }
  return isPalindrome;
};
checkIsPalindrome("anna"); // true

// 5
const parseObject = (obj) => {
  return "hello my name is " + obj.name + " " + obj.surname + "and I am " + obj.age + " years old";
  return `hello my name is ${obj.name} ${obj.surname} and I am ${obj.age} years old`; // იგივეა რაც წინა ხაზი, უბრალოდ template literals-ით გაკეთებული
};
parseObject({ name: "Temo", surname: "Smoev", age: 24 }); // hello my name is Temo Smoev and I am 24 years old

// 6
const person = {
  name: "Temo",
  surname: "Smoev",
  greet: () => {
    console.log("hello world");
  },
};
person.greet(); // hello world

// 7
function calculateSum() {
  let sum = 0;
  // arguments არის ერეის მსგავსი ობიექტი რომელიც შეიცავს ყველა არგუმენტს რომელიც იყო გადაცემული ობიექტში
  // მიაქციეთ ყურადღება რომ arguments იქმება მარტო function keyword-ით შექმნილ ფუნქციებში
  // arguments არ გაქვთ გავლილი და მინდოდა რომ დაგეგუგლათ ეგ
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
calculateSum(5, 4, 3, 2, 1); // 15

// 8
// თუ არ გადავცემთ createCounter-ს initialValue არგუმენტს ის 0 იქნება.
const createCounter = (initialValue = 0) => {
  let value = initialValue;
  return {
    increment: () => {
      value++;
    },
    decrement: () => {
      value--;
    },
    getValue: () => {
      return value;
    },
  };
};
const counter=createCounter(0)
counter.getValue() // 0
counter.increment()
counter.getValue() // 1
counter.decrement()
counter.getValue() // 0

