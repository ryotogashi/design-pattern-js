import Car from "./Car";

// constractor pattern
class SuperCar extends Car {
  constructor(doors, engine, color, wheel) {
    super(doors, engine, color);
    this.wheel = wheel;
  }
}
export default SuperCar;
