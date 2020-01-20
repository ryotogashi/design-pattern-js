import Car from "./creation/class-prototype";
import SuperCar from "./creation/constructor";
import Vehicle from "./creation/singleton";
import SmartphoneFactory from "./creation/factory";
import PhoneFactory from "./creation/abstract-factory";
import carMixins from "./structural/mixins";

const honda = new Car(4, "V4", "blue");
console.log(honda);

const superHonda = new SuperCar(4, "V8", "red", 4);
console.log(superHonda);

const bikeSilver = new Vehicle(0, "V2", "silver");
const bikeBlue = new Vehicle(0, "V4", "blue");
console.log(bikeSilver);
console.log(bikeBlue);

const sFactory = new SmartphoneFactory();
const pixel = sFactory.createSmartphone("google");
const iphone = sFactory.createSmartphone("apple");
console.log(pixel);
console.log(iphone);

const pFactory = new PhoneFactory();
const pixel2 = pFactory.createPhone("google");
const iphone2 = pFactory.createPhone("apple");
console.log(pixel2);
console.log(iphone2);

Object.assign(Car.prototype, carMixins);
honda.revEngine();
