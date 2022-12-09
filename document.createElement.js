// შევქმნათ წითელი კვადრატი, რომელსაც გამოვაჩენთ ჩვენს გვერდზე

let redSquare = document.createElement("div"); // შევქმენით ცარიელი დივი
redSquare.style.width = "100px"; // მივანიჭეთ სიგანე
redSquare.style.height = "100px"; // მივანიჭეთ სიგრძე
redSquare.style.backgroundColor = "red"; // მივანიჭეთ ფერი

// ამ მომენტისთვის ოპერატიულ მეხსიერებაში ინახება redSquare ობიექტი, რომელიც ჯერ ჩვენს გვერდზე არ არის განთავსებული

const container = document.querySelector(".container"); // აქ ვასელექტებთ დივს 'container' კლასით რომელიც გვაქვს შექმნილი index.html-ში,  რომ ჩავსვათ ჩვენი blinker შიგნით
container.appendChild(redSquare); // აქ ვსვავთ ჩვენს წითელ კვადრატს კონტეინერში
