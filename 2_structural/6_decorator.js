// Цель данного паттерна - добавить новый функционал к уже существующему классу.!

//Пример:

class Server {
    constructor(ip, port) {
        this.ip = ip;
        this.port = port;
    }

    get url() {
        return `https://${this.ip}:${this.port}`;
    }
}

function awsDecorator(server) {
    server.isAWS = true;
    server.awsInfo = function() {
        return server.url;
    };

    return server;
}

const s1 = new Server("12.34.12.168", 8000);
console.log(s1);

//А теперь обернем нашим декоратором:
const s2 = awsDecorator(s1);
console.log(s2.awsInfo());
