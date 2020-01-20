export class Smartphone {
  constructor(name, model, color) {
    this.name = name;
    this.model = model;
    this.color = color;
  }
}

export class Iphone {
  constructor(name, model, color) {
    this.name = name;
    this.model = model;
    this.color = color;
  }
}

export class PhoneFactory {
  createPhone(type = null) {
    switch (type) {
      case "google":
        return new Smartphone("pixel 3", "2019", "black");
      case "apple":
        return new Iphone("iphone X", "2019", "gold");
      default:
        return new Smartphone("Sumsun", "2016", "yellow");
    }
  }
}

export default PhoneFactory;
