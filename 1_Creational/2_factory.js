class SimpleMembership {
    constructor(name) {
        this.name = name;
        this.cost = 50;
    }
}

class StandardMembership {
    constructor(name) {
        this.name = name;
        this.cost = 150;
    }
}

class PremiumMembership {
    constructor(name) {
        this.name = name;
        this.cost = 500;
    }
}

class MemberFactory {
    static list = {
        simple: SimpleMembership,
        standard: StandardMembership,
        premium: PremiumMembership
    };

    create(name, type = 'simple') {
        const Membersip = MemberFactory.list[type] || MemberFactory.list.simple; // Здесь мы получаем ссылку на класс.
        const member = new Membersip(name); // Создаём экземпляр класса, полученного по ссылке.
        member.type = type;
        member.define = function() {
          console.log(`define => ${this.name} (${this.type}): ${this.cost}`);
        };
        return member;
    }
}

const factory = new MemberFactory();
const members = [
    factory.create('Alexandr', "simple"),
    factory.create('Masha', "standard"),
    factory.create('Nataly', "premium")
];

members.forEach(member => member.define());

// Суть паттерна - мы делегируем создание экземпляров классов на метод нового класса, который по типу создает требуемый экземпляр. Мы также в новом классе можем определять этим экземплярам свои методы и прочее.
