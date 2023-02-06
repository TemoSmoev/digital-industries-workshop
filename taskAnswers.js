/**
 * 1. დაწერეთ ერეი, რომელშიც არის შემდეგი ტიპის ობიექტები {name:string,age:number}
 * დააბრუნეთ ახალი ერეი, რომელშიც მარტო ის ობიექტებია, რომლის age  არის მეტი 18ზე
 * (დაწერეთ ეს დავალება როგორც for ლუპით, ასევე filter მეთოდით)
 */

const arr1 = [
  { name: "Alex", age: 11 },
  { name: "Anano", age: 25 },
  { name: "Levan", age: 22 },
];

const answer1_1 = [];
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i].age >= 18) {
    answer1_1.push(arr1[i]);
  }
}

const answer1_2 = arr1.filter((el) => el.age >= 18); // ერთ ხაზში შეგვიძლია დავწეროთ იგივე რაც for ლუპით გვიწერია
console.log(answer1_1, answer1_2);

/**
 * 2. გვაქვს ერეი [{id:number,title:string,description:string,userId:number},....],
 *  ამ ერეიდან უნდა მივიღოთ სხვა ერეი, სადაც userId თვისება არ იქნება ობიექტში
 */

const arr2 = [
  { id: 1, title: "title1", description: "description1", userId: 121 },
  { id: 2, title: "title2", description: "description2", userId: 115 },
  { id: 3, title: "title3", description: "description3", userId: 454 },
  { id: 4, title: "title4", description: "description4", userId: 332 },
];

/**
 * აქ მიაქციეთ ყურადღება რომ პირდაპირ ობიექტის დაბრუნების შემთხვევაში () ფრჩხილებში ვსვამთ ობიექტს,
 * რომ კომპილატორს ობიექტის ფრჩხილები ფუნქციის ტანის ფრჩხილებში არ შეეშალოს
 *  */
const answer2_1 = arr2.map((el) => ({ id: el.id, title: el.title, description: el.description }));
// მეორე მაგალითშია გამოყენებული დესტრუქტურიზაცია (destrcturing), რომელიც შეგიძლიათ დაგუგლოთ
const answer2_alternative = arr2.map(({ userId, ...rest }) => ({ ...rest }));
console.log(answer2_1, answer2_alternative);

/**
 *  3. Შეაყვანინეთ მომხამრებელს 5 რიცხვი, ჩაყარეთ ყველა რიცხვი ერეიში და გამოიტანეთ იგივე ერეი,
 *  რომლის ყველა რიცხვი იქნება გამრავლებული თავის თავზე [1,2,3,4,5] -> [1,4,9,16,25]
 */

const number3_1 = Number(prompt("შეიყვანეთ პირველი რიცხვი"));
const number3_2 = Number(prompt("შეიყვანეთ პირველი რიცხვი"));
const number3_3 = Number(prompt("შეიყვანეთ პირველი რიცხვი"));
const number3_4 = Number(prompt("შეიყვანეთ პირველი რიცხვი"));
const number3_5 = Number(prompt("შეიყვანეთ პირველი რიცხვი"));

const arr3 = [number3_1, number3_2, number3_3, number3_4, number3_5];
const answer3 = arr3.map((el) => el * el);

/**
 * 4. Გვაქვს შემდეგი სტრინგი ‘hello,my,name,is,John’
 *  და გადააქციეთ ეს სტრინგ შემდეგ სტრინგად ‘hello my name is John’
 */

const str4 = "hello,my,name,is,John";
const answer4 = str4.replaceAll(",", " ");
console.log(answer4);

/**
 * 5. Გვაქვს შემდეგი ერეი [‘hello’,’my’,’name’,’is’,’John’],
 *  გადააქციეთ ეს ერეი შემდეგ სტრინგად ‘HELLO MY NAME IS JOHN’
 */

const arr5 = ["hello", "my", "name", "is", "John"];
const answer5 = arr5.join(" ").toUpperCase(); // join მეთოდი დაგვიბრუნებს სტრინგს და სტრინგზე შეგვიძლია პირდაპირ toUpperCase-ის გამოძახება
console.log(answer5);

/**
 * 6. Მომხმარებელს შეაყვანინეთ 5 რიცხვი, დაფუშეთ ეს რიცხვები ერეიში,
 * თუ ერთ-ერთი რიცხვი მეტია 100ზე დააბრუნეთ true
 * (დაწერეთ ეგ პროგრამა როგორც for ლუპით, ასევე some მეთოდით)
 */

const number6_1 = Number(prompt("შეიყვანეთ პირველი რიცხვი"));
const number6_2 = Number(prompt("შეიყვანეთ მეორე რიცხვი"));
const number6_3 = Number(prompt("შეიყვანეთ მესამე რიცხვი"));
const number6_4 = Number(prompt("შეიყვანეთ მეოთხე რიცხვი"));
const number6_5 = Number(prompt("შეიყვანეთ მეხუთე რიცხვი"));

const arr6 = [number6_1, number6_2, number6_3, number6_4, number6_5];

let answer6_1 = false;
for (let i = 0; i < arr6.length; i++) {
  if (arr6[i] > 100) {
    answer6_1 = true;
    break; // break-ით ჩვენ შეგვიძლია გამოვიდეთ ფორ ლუპიდან
    /**
     * ამ შემთხვევაში პატარა ოპტიმიზაციის მიზნით გამოვიყენე break
     *  რადგან პირველივე ნაპოვნ რიცხვზე რომელიც 100ზე მეტია უნდა შევცვალოთ ჩვენი პასუხი და არ გვაინტერესებს
     *  მერე შეგვხვდება თუ არა მსხგავსი რიცხვი
     *  */
  }
}

const answer6_2 = arr6.some((el) => el > 100);

console.log(answer6_1, answer6_2);

/**
 * 7. Მომხმარებელს შეაყვანინეთ 10 რიცხვდი,
 *  ჩაყარეთ ყველა რიცხვი ერეიში და reduce მეთოდის დახმარებით გამოიტანეთ ყველაზე პატარა რიცხვი
 *  (დაწერეთ იგივე კლასიკური for ლუპით)
 */

const arr7 = [3, 4, 5, 2, 6, 4]; //წარმოვიდგინოთ რომ ეს შეიყვანა მომხმარებელმა
const answer7_1 = arr7.reduce((min, el) => (el < min ? el : min));

let answer7_2 = arr7[0];
for (let i = 0; i < arr7.length; i++) {
  if (arr7[i] < answer7_2) {
    answer7_2 = arr7[i];
  }
}

console.log(answer7_1, answer7_2);
