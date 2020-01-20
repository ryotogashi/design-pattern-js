import Car from "./class-prototype";
import SuperCar from "./constructor";
import Vehicle from "./singleton";

const honda = new Car(4, "V4", "blue");
console.log(honda);

const superHonda = new SuperCar(4, "V8", "red", 4);
console.log(superHonda);

const bikeSilver = new Vehicle(0, "V2", "silver");
const bikeBlue = new Vehicle(0, "V4", "blue");
console.log(bikeSilver);
console.log(bikeBlue);
