// polimorphysm
class Shape {
  constructor(name) {
    this.name = name;
  }
  calculatePerimeter = () => {};
}
class Rectangle extends Shape {
  constructor(name, x, y) {
    super(name);
    this.x = x;
    this.y = y;
  }
  calculatePerimeter = () => {
    return 2 * (this.x + this.y);
  };
}
class Triangle extends Shape {
  constructor(name, x, y, z) {
    super(name);
    this.x = x;
    this.y = y;
    this.z = z;
  }
  calculatePerimeter = () => {
    return this.x + this.y + this.z;
  };
}

const r = new Rectangle("rectangle", 5, 10);
const t = new Triangle("triangle", 5, 5, 5);

console.log(r.calculatePerimeter());
console.log(t.calculatePerimeter());
