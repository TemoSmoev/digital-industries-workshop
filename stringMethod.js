// length
const str = "my favorite color is orange";
console.log(str.length);

// slice
const str1 = "apple, banana, kiwi";
console.log(str1.slice(7));
console.log(str1.slice(7, 13));

// substring
const str2 = "apple, banana, kiwi";
console.log(str2.substring(-1));

// replace (replaces the first word that was found)
const str3 = "hello orld orld";
console.log(str3.replace("orld", "world")); // hello world orld

// replaceAll (replaces all the words that were found)
const str4 = "hello orld orld";
console.log(str4.replaceAll("orld", "world")); // hello world world

// toUpperCase
const str5 = "hello";
console.log(str5.toUpperCase()); // HELLO

// toLowerCase
const str6 = "HELLO";
console.log(str5.toLowerCase()); // hello
