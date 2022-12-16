function Rectangle1(a, b) {
  this.a = a;
  this.b = b;
  this.getPerimeter = function () {
    return 2 * (this.a + this.b);
  };
  this.getArea = function () {
    return this.a * this.b;
  };
}

const square1 = new Rectangle1(4, 4);
const square2 = new Rectangle1(5, 5);

console.log(square1.getArea === square2.getArea); // false

/**
 * რა პრობლემაა Rectangle1-ში?
 * ჩვენ ვიცით რომ ფუნქცია ობიექტ ტიპისაა ჯავასკრიპტში
 * თითოეული ობიექტის შექმნისას Rectangle1 კონსტრუქტორით ახალი ფუნქცია getPerimeter და getArea შეიქმნება
 * თუ შევქმნით 10 000 ობიექტს Rectangle1 ფუნქცია-კონსტრუქტორით, 20 000 მეთოდი იქნება შენახული მეხსიერებაში
 *
 * რა გვინდა ჩვენ?
 * ჩვენ გვინდა გავიტანოთ ეს ორი (getPerimeter, getArea) ფუნქცია ისე, რომ ყველა Rectangle1-ისგან შექმნილი
 * ობიექტი იყენებდეს ამ ერთნაირ ორ მეთოდს.
 * შესაბამისად, თუ გვექნება 10 000 Rectangle1-ის ობიექტი, გვინდა მარტო ორი getPerimeter და getArea
 * ფუნქცია გვქონდეს ყველა ობიექტისთვის
 * ზუსტად მაგ პრობლემის გადასაჭრელად გვეხმარება prototype-ი
 */

/**
 * prototype თვისება-ობიექტი გააჩნია ყველა ფუნქციას, მაგრამ ის უნდა გამოვიყენოთ
 * მხოლოდ კონსტრუქტორ ფუნქციებში.
 * prototype-ში გატანილი მეთოდები იქნება დაშეარებული ყველა ობიექტისთვის, რომელიც იქნება შექმნილი კონსტრუქტორ ფუნქციით
 */
function Rectangle2(a, b) {
  this.a = a;
  this.b = b;
}
Rectangle2.prototype.getPerimeter = function () {
  return 2 * (this.a + this.b);
};
Rectangle2.prototype.getArea = function () {
  return this.a * this.b;
};

const square3 = new Rectangle2(4, 4);
const square4 = new Rectangle2(5, 5);
console.log("square2 object", square3);
console.log(square3.getArea === square4.getArea); // true
