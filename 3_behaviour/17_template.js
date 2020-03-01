class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    responsibilities() {}

    work() {
        return `${this.name} выполняет ${this.responsibilities()}`;
    }

    getPaid() {
        return `${this.name} имеет зп ${this.salary}`
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }

    responsibilities() {
        return `процесс создания программы`;
    }
}

class Tester extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }

    responsibilities() {
        return `процесс тестирования программы`;
    }
}

const dev = new Developer("Alexandr", 35000);
const tester = new Tester("Natalia", 25000);

console.log(dev.getPaid());
console.log(dev.work());
console.log(dev.responsibilities());

console.log(tester.getPaid());
console.log(tester.work());
console.log(tester.responsibilities());
