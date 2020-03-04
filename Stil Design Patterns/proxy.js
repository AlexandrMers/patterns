class CarAccess {
    open() {
        console.log(`Opening car door`);
    }

    close() {
        console.log(`Closing the car door`);
    }
}

class SecuritySystem {

    password = 123;

    constructor(door) {
        this.door = door;
    }

    setPassword(password) {
        this.password = password;
    }

    open(password) {
        if(this.authenticate(password)) {
            this.door.open();
        } else {
            console.log(`Access denied!`);
        }
    }

    authenticate(password) {
        return password === this.password;
    }

    close() {
        this.door.close();
    }
}

const door = new SecuritySystem(new CarAccess());
door.setPassword('Elon');

door.open('Sasha');
door.open('Elon');
door.close();
