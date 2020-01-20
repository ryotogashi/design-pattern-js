// singleton pattern
let instance = null;

class Vehicle {
  constructor(doors, engine, color) {
    if (instance) return instance;
    this.doors = doors;
    this.engine = engine;
    this.color = color;
    instance = this;
  }
}

export default Vehicle;
