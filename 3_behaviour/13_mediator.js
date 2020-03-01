// Это дизайн паттерн, который предоставляет централизованную абстракцию для взаимодействия.
class User {
    constructor(name) {
        this.name = name;
        this.room = null;
    }

    send(message, to) {
        this.room.send(message, this, to);
    }

    receive(message, from) {
        console.log(`${from.name} => ${this.name}: ${message}`);
    }
}

class ChatRoom {
    constructor() {
        this.users = {}
    }

    register(user) {
        this.users[user.name] = user;
        user.room = this;
    }

    send(message, from, to) {
        if(to) {
            to.receive(message, from);
        } else {
            Object.keys(this.users).forEach(key => {
                if(this.users[key] !== from) {
                    this.users[key].receive(message, from);
                }
            })
        }
    }
}

const alex = new User('Alex');
const vlad = new User('Vlad');
const igor = new User('Igor');

const room = new ChatRoom();

room.register(alex);
room.register(vlad);
room.register(igor);

alex.send("hello", vlad);
// Через медиатор реализуется подобная "жесткая связь между классами".
