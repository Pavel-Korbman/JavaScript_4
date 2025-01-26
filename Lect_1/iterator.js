// Итерируемые объекты 
// 
// Перебираемые или итерируемые объекты — это обобщение массивов. 
// Концепция, позволяющая любой объект использовать в цикле for(…of…). 
// Есть большое количество объектов, которые являются итерируемыми. 
// Например, строки. 
// Несмотря на то что строка является примитивным типом данных в JavaScript, мы можем её представить как массив символов:

const string = 'Hello!';

console.log(string[1]); // e
console.log(string.length); // 6

for (let str of string) {
    console.log(str);
}

// Symbol.iterator 
// Встроенная конструкция языка 

// Symbol.iterator позволяет создавать итераторы, которые работают по написанному нами коллбеку.

// Объект является итератором, если он умеет обращаться к элементам коллекции по одному за раз, при этом отслеживая своё текущее положение внутри этой последовательности. 
// В JavaScript итератор — это объект, который предоставляет метод next(), возвращающий следующий элемент последовательности. 
// Этот метод возвращает объект с двумя свойствами: 
// done и value. 
// Если объект не является массивом, но является коллекцией каких-то элементов, то он подходит для цикла for(… of …). Например, у нас есть объект с диапазоном чисел:

let range = {
    from: 1,
    to: 10
};

// Мы хотим из него сделать последовательность, чтобы на выходе цикла for(let number of range) получить последовательность от 1 до 10. 
// Чтобы это сделать, нужно добавить в объект Symbol.iterator

range[Symbol.iterator] = function () {
    return {
        current: this.from,
        last: this.to,
        next() {
            return this.current <= this.last ? { done: false, value: this.current++ } : { done: true };
        }
    }
}

for (let number of range) {
    console.log(number);
}

// Можно записать всё внутри объекта:

let range1 = {
    from: 1,
    to: 12,
    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },
    next() {
        return this.current <= this.to ? { done: false, value: this.current++ } : { done: true };
    }

};

for (let number of range1) {
    console.log(number);
}