class Rectangle {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  getPerimeter = () => {
    return 2 * (this.a + this.b);
  };
  getArea = () => {
    return this.a * this.b;
  };
}

const square = new Rectangle2(4, 4);
console.log(square);

// კლასი, რომელიც რეალურად კონსტრუქტორ ფუნქციის გალამაზებული ვერსიაა.
// ამ მაგალითზე იმავეს ვაკეთებთ რაც პროტოტიპში გვქონდა გაკეთებული
