// Паттерн конструктор
class Server {
    constructor(name, ip) {
        this.name = name;
        this.ip = ip;
    }

    getUrl() {
        return `https://${this.ip}:80`
    }
}

const aws = new Server("AWS German", "23.44.15.168");

console.log(aws.getUrl());
