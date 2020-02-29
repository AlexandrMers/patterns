// Паттерн "Адаптер"
// Что такое структурные дизайн-паттерны? Структурные дизайн-паттерны - это те, которые позволяют в уже существующее приложение ввести новый функционал, при этом не ломая старый.
// Конкретно адаптер позволяет внедрить старый интерфейс какого-то класса в новый и позволяет им работать совместно, при этом не ломая приложение.


// Пример:
class OldCalc {
    operations(t1, t2, operation) {
        switch (operation) {
            case "add": return t1 + t2;
            case "sub": return t1 - t2;
            default: return NaN;
        }
    }
}

class NewCalc {
    add(t1, t2) {
        return t1 + t2;
    }
    sub(t1, t2) {
        return t1 - t2;
    }
}

class CalcAdapter {
    constructor(newClass) {
        this.calc = newClass;
    }

    operations(t1, t2, operation) {
        switch (operation) {
            case "add": return this.calc.add(t1, t2);
            case "sub": return this.calc.sub(t1, t2);
            default: return NaN;
        }
    }
}

const adapter = new CalcAdapter(new NewCalc());
console.log(adapter.operations(2,3,"add"));

// Суть паттерна - Мы внутри класса "adapter" реализовали новый функционал со старым интерфейсом. То есть, мы обращаемся к методоам уже нового класса, но заворачиваем это в старый интерфейс, чтобы не сломать код в других местах.
