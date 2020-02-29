// Паттерн итератор - служит для последовательного выполнения обработки данных.
class MyIterator {
    constructor(data) {
        this.index = 0;
        this.data = data;
    }

    [Symbol.iterator]() {
        return {
            next: () => {
                if(this.index < this.data.length) {
                    return {
                        value: this.data[this.index++],
                        done: false
                    }
                } else {
                    this.index = 0;
                    return {
                        done: true,
                        value: undefined
                    }
                }
            }
        }
    }
}

function* generator(collection) {
    let index = 0;
    while(index < collection.length) {
        yield collection[index];
        index++;
    }
}

const iterator = new MyIterator(['I', 'am', 'a', 'tiger']);

// for (const val of iterator) {
//     console.log(`val => ${val}`);
// }
const gen = generator(['I', 'am', 'a', 'tiger']);

// for (const el of gen) {
//     console.log(el);
// }

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
