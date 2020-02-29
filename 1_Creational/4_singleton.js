class Database {
    constructor(data) {
        if(Database.exists) { // Если класс уже был инциализирован, то возвращать старый экземпляр класса, который был инициализирован единажды.
            return Database.instance;
        }

        Database.instance = this; //В поле instance мы сохраняем наш текущий класс.
        Database.exists = true; // Данное свойство будет говорить нам о том, что класс уже был инициализирован, чтобы предотвратить дальнейшие инициализации НОВЫХ экземпляров.
        this.data = data;
    }

    getData() {
        return this.data;
    }
}

const mongo = new Database("Mongo DB");
console.log(mongo.getData());

const mySql = new Database('MySql');
console.log(mySql.getData());

// Таким образом, суть поттерна в том, что мы можем инициализировать только один экземпляр класса, все остальные инициализации будут возврашать экземпляр самой первой инициализации, первый экземпляр является, как бы , единственным истинным.
