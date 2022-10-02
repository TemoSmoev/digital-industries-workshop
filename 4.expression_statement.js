// expression

5;
10 + 4;
10 + 4 * 7;
5 > 9;

// IIFO-s and functions declarations are also expressions

(() => {
  return "hi, my name is Temo";
})();

// statements

let a = 5;

for (i = 0; i < 4; i++) {
  console.log("hello world");
}

/** to check rather the code is statement or expression, simply put it into console.log(->here).
 * If it throws error, it's an statement, else it's an expression  */
