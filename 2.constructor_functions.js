function Phone(manufacturer, model, year) {
  this.manufacturer = manufacturer;
  this.model = model;
  this.year = year;
}
Phone.prototype.ring = function () {
  console.log("this phone is ringing");
};

let p = new Phone("Apple", "iphone", 2022);
console.log(p);
