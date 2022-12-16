function Phone(manufacturer, model, year) {
  this.manufacturer = manufacturer;
  this.model = model;
  this.year = year;
  this.ring = function () {
    console.log("this phone is ringing");
  };
}
