// Цель паттерна - эффективно передавать и работать с данными через различные типы объектов.

class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
}

class CarFactory {
    constructor() {
        this.cars = [];
    }

    getCar(model, price) {
        return this.cars.find(car => car.model === model && car.price === price);
    }

    create(model, price) {
        const candidate = this.getCar(model, price);
        if(candidate) {
            return candidate;
        }

        const newCar = new Car(model, price);
        this.cars.push(newCar);
        return newCar;
    }
}

const factory = new CarFactory();
const bmwX6 = factory.create("bmw", 10000);
const audi = factory.create("audi", 12000);
const bmwX3 = factory.create("bmw", 8000);
const bmwX2 = factory.create("bmw", 8000);
const bmwX1 = factory.create("bmw", 8000);

console.log(bmwX6);
console.log(bmwX3);
console.log(bmwX2);
console.log(bmwX1);

console.log(factory.cars);
// ТО есть, суть в том, что если мы пытаемся создать новую машину с той же замой моделью, то нам вернется машина из кеша, так как машина с такой моделью уже была создана, в этом суть паттерна.
