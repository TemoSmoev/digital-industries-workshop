/** დაწერეთ ფუნქცია, რომელიც არგუმენტად მიიღებს ოთხკუთხედის ორ a და b გვერდის სიგრძეს და დაგვიბრუნებს ოთხკუთხედის ფართობს (ფართობი = a გვერდი * b გვერდზე) */
/** დაწერეთ ფუნქცია, რომელიც არგუმენტად მიიღებს ერთ რიცხვს და გამოთვლის ლუწ-კენტობას, თუ კენტია რიცხვი დააბრუნებ 'odd' თუ ლუწია 'even' */
/** დაწერეტ ფუნქცია, რომელიც მიიღებს შემდეგი ტიპის ობიექტს {name:string, surname:string, age:number} და დაგვიბრუნებს შემდეგ სტრიქონს
 *  "hello my name is {name} {surname} and I am {age} years old" */
/** დაწერეთ ობიექტი {name:string, surname:string, greet:function}, greet არგუმენტის გამოძახებისას უნდა დაიბეჭდოს “hello world” სტრიქონი კონსოლში */
/** დაწერეთ ფუნქცია, რომელიც არგუმენტად მიიღებს n რიცხვს და დაგვიბრუნებს 1-დან n-მდე ყველა ნატურალურ რიცხვს */
/** დაწერეთ ფუნქცია, რომელიც არგუმენტად მიიღებს სტრიქონს და დაგვიბრუნებს 'a' სიმბოლოს რაოდენობას ამ სტრიქონში */

// for (let i; i < 10; i++) {
//   console.log(i);
// }
// console.log(i);

// const counter = () => {
//   let a = 0;

//   const increment = () => {
//     // a-ze aqvs wvdoma
//     a++;
//     return a;
//   };

//   return increment();
// };

// const count = counter();

// console.log(count());
// console.log(count());
// console.log(count());

// currying

const a = (a) => {
  return (b) => {
    return console.log(a, b);
  };
};

a(2)(4);
