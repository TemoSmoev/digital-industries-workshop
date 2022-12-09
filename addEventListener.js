let blinker = document.createElement("div"); // შევქმენით ცარიელი დივი
blinker.style.width = "100px"; // მივანიჭეთ სიგანე
blinker.style.height = "100px"; // მივანიჭეთ სიგრძე
blinker.style.backgroundColor = "yellow"; // მივანიჭეთ ფერი
blinker.style.border = "1px solid black"; // მივანიჭეთ ბორდერი

const container = document.querySelector(".container"); // აქ ვასელექტებთ დივს 'container' კლასით რომელიც გვაქვს შექმნილი index.html-ში, რომ ჩავსვათ ჩვენი blinker შიგნით
container.appendChild(blinker); // აქ ვსვავთ ჩვენს blinker-ს კონტეინერში

/**
 * addEventListener-ით ჩვენ შეგვიძლია მოვუსმინოთ სხვა და სხვა ქმედებაზე ჩვენს ელემენტს. (ამ შემთხვევაში blinker-ს ვუსმენთ კლიკზე)
 * მეორე არგუმენტად გადავცემთ ფუნქციას რომელიც ამუშავდება ყოველ ქმედებაზე (ამ შემთხვევაში ელემენტის კლიკზე)
 */
let i = 0;
blinker.addEventListener("click", () => {
  if (i % 2 === 0) {
    blinker.style.backgroundColor = "yellow";
  } else {
    blinker.style.backgroundColor = "white";
  }
  i++;
});
