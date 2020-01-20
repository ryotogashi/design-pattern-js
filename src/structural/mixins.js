const carMixins = {
  revEngine() {
    console.log(`The ${this.engine} is doing Vroom Vroom!`);
  }
};

export default carMixins;

// Mixins pattern is adding new function to other object.
// Object.assign(Car.prototype, carMisins);
// [instance of Car].revEngine();
