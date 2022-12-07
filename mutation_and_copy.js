// let's change person's age to 38
// 1-st approach
const person1 = { name: "John", surname: "Doe", age: 35 };
person1.age = 38; // here we are changing the object itself, this is called mutation

/**
 * არის მომენტები, როდესაც არ გვინდა მთავარი ობიექტის ცვლილება, არამედ გვინდა მისი დაკოპირება და დაკოპირებულ
 * ობიექტთან მუშაობს
 * */

/**
 * როგორც გავიარეთ, ჩვენ არ შეგვიძლია შევქმნათ ახალი ცვლადი და უბრალოდ = ოპერატორით მივანიჭოთ ძველი ობიექტი მას,
 * const person2 = person1
 * person2-ს ექნება person2-ის მნიშვნელობა და ვერ იმუშავებს
 */

// 2-nd approach
const person2 = { name: "John", surname: "Doe", age: 35 };
const copiedPerson2 = { ...person2 }; // ... არის spread ოპერატორი, რომელიც იღებს ყველა მნიშვნელობას ობიექტიდან და ახალ ობიექტში აკოპირებს
copiedPerson2.age = 38; // mutating and working with the copied value
console.log(person2); // age is old 35
