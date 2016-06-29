function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.displayCar = displaycar;
}
function displaycar() {
  var result =  " Car Make is: " + this.make + "\n " +  " Model is: " + " " + this.model + "\n" + " Made in Year:  " + this.year;
  alert(result);
}
var porsche = new Car("Porsche", "Cayman", 2015 , true);
var land = new Car("Land","Rover",2016);
porsche.displayCar();
land.displayCar();