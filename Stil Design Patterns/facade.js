// Задача - скрыть сложную логику за простым фасадом.

class Conveyor {
    setBody() {console.log('Body set');}
    getEngine() {console.log('Dismantle Engine!');}
    setEngine() {console.log('Engine set!');}
    setInterior() {console.log('Engine set!');}
    setWheels() {console.log('Wheels!')}
    paint() {console.log('Car painted')}
}

class ConveyorFacade {
    constructor(car) {
        this.car = car;
    }

    assembleCar() {
        this.car.setBody();
        this.car.getEngine();
        this.car.setEngine();
        this.car.setInterior();
        this.car.setWheels();
        this.car.paint();
    }
}

const conveyor = new ConveyorFacade(new Conveyor());
conveyor.assembleCar();

// Суть - скрыть сложную логику, предоставив легкий интерфейс для взаимодействия с пользователем.
