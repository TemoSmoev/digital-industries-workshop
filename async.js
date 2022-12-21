// setTimeout არის ჯავასკრიპტის ჩაშენებული ფუნქცია, რომელიც ქმნის წამზომს, მეორე
// არგუმენტად იღებს მილიწამებს, მაგალითად თუ გვინდა წუთნახევარზე დავაყენოთ
// წამოზომი, უნდა ჩავწეროთ 1500
setTimeout(() => {
  console.log("this will be executed after 1.5 seconds");
}, 1500);

// setTinterval წრეზე გამოიძახებს ქოლბექის ფუნქციას, ყოველი n (მეორე არგუმენტი) წამის განმავლობაში
setInterval(() => {
  console.log("this will be executed after every 1.5 seconds");
}, 1500);
