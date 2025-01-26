// Сборщик мусора 
// – фоновый процесс, который управляет удалением ненужных объектов в памяти. 


let obj = {
    animal: 'Dog'
};

let obj2 = obj;
obj = null;

console.log(obj2);
console.log(obj);

// Тип данных Symbol 

// представляет из себя уникальный идентификатор. Значение всегда уникально, даже у переменных, объявленных с одинаковым описанием. Для того, чтобы одному описанию соответствовал один идентификатор, его нужно объявить в глобальном реестре. Поля объекта с ключами, тип которых Symbol, скрыты для перебора итераторами.

// Системные символы 
// Имеются специальные символы, которыми мы можем настраивать поведение объектов. Они содержатся внутри JavaScript и называются системными.

// некоторые из них: 
// 📌 Symbol.hasInstance 
// 📌 Symbol.isConcatSpreadable 
// 📌 Symbol.iterator 
// 📌 Symbol.toPrimitive

let symbol = Symbol(); // объявление
symbol = Symbol('dog');
console.log(symbol); // Symbol(dog)

// При каждом создании символа, его значение уникально, даже если мы создадим несколько символов с одинаковым описанием:
const dog1ID = Symbol('dog');
const dog2ID = Symbol('dog');

console.log(dog1ID == dog2ID); // false

// Значения не выводятся в браузере и консоли
// alert(dog1ID); // Uncaught TypeError:
// alert(dog1ID.toString); // function toString() { [native code] }

// description

// Если мы хотим вывести описание символа, можно обратиться к свойству description
const dogID = Symbol('my super dog');
console.log(dogID.description); // my super dog
// alert(dogID.description); // my super dog

// Символы в объекте

let id = Symbol('idDog');

let buddy = {
    [id]: 'Жучка'
}

console.log(buddy); // {Symbol(idDog): 'Жучка'}
console.log(buddy[id]); // Жучка

buddy[id] = 'Бобик';
console.log(buddy[id]); // Бобик

// Если не использовать символы в идентификаторах - сторонний код может их переписать.

let buddies = {
    [Symbol('Жучка')]: 'Жучка',
    [Symbol('Бобик')]: 'Бобик',
    [Symbol('Бобик')]: 'Бобик',
    [Symbol('Шарик')]: 'Шарик',
    elephant: 'Слон'
}
console.log(buddies); // {elephant: 'Слон', Symbol(Жучка): 'Жучка', Symbol(Бобик): 'Бобик', Symbol(Бобик): 'Бобик', Symbol(Шарик): 'Шарик'}

// Object.assign копирует все свойства, в том числе, символьные в новый объект

let newBuddies = {};

Object.assign(newBuddies, buddies);
console.log(newBuddies); // {elephant: 'Слон', Symbol(Жучка): 'Жучка', Symbol(Бобик): 'Бобик', Symbol(Бобик): 'Бобик', Symbol(Шарик): 'Шарик'}

buddies.cat = 'Барсик';
console.log(buddies); // Барсик появится в консоли при печати из 72 и 82 строки и не появиться в console.log(newBuddies) в 79 строке

//  Symbol.for

// Повторные вызовы функции Symbol() приводят к созданию уникальных идентификаторов всегда, даже если мы передаём в неё одно и то же описание. 
// А что, если нам нужно, чтобы при задаче каждому описанию соответствовал только один уникальный идентификатор? 
// Для этого создан глобальный реестр символов. Мы создаём символы в нём, потом обращаемся к нему по этому имени. И при этом обращении нам будет гарантированно выдаваться конкретный, соответствующий этому описанию, символ. 
// Для этого используется специальный метод 
// Symbol.for(ключ). 
// Он считывает нужный символ, а, при его отсутствии, создаст.

let id1 = Symbol.for("id"); // если символа нет - он будет создан

let idAgain = Symbol.for("id"); // записываем его в другую переменную

console.log(id1 === idAgain); // true

// Symbol.keyFor (идентификатор), 
// возвращает описание символа по идентификатору. 
// Этот метод работает для глобальных символов, а при попытке поиска обычных вернёт undefined.

let sym1 = Symbol.for("name");
let sym2 = Symbol.for("uniqId");

console.log(Symbol.keyFor(sym1)); // name
console.log(Symbol.keyFor(sym2)); // uniqId

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

// Array.from 
// Метод from класса Array позволяет создавать массивы из итерируемых объектов.

let pseudo = {
    0: 'first',
    1: 'second',
    2: 'three',
    length: 3
}

let arr = Array.from(pseudo);

console.log(arr); // (3) ['first', 'second', 'three']
console.log(arr.pop()); // three
console.log(arr); // (2) ['first', 'second']

let pseudo2 = 'Это строка';
let arr1 = Array.from(pseudo2);
console.log(arr1); // (10) ['Э', 'т', 'о', ' ', 'с', 'т', 'р', 'о', 'к', 'а']





