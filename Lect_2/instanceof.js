// Операторы с новой функциональностью

// Оператор instanceof
// Поможет для определения:
// 💡 Принадлежит ли объект к предлагаемому классу
// 💡 Либо к одному из встроенных классов, как в примере с Array
// 💡 Или для функций – конструкторов:
// function Rabbit() { };
// console.log(new Rabbit() instanceof Rabbit); // true


class Animal {
    constructor (name){
        this.name = name;
    }
}

class Dog extends Animal {
    bark(){
        console.log('Woof');
    }
}


const animal = new Animal('Animal');
const dog = new Dog('Dog');

console.log(animal instanceof Animal); // true т.к. animal - экземпляр Animal
console.log(dog instanceof Dog); // true т.к. dog - экземпляр Dog
console.log(dog instanceof Animal); // true т.к. dog - экземпляр Dog - дочернего от Animal
console.log(animal instanceof Dog); // false
console.log(animal instanceof Cat); // Uncaught ReferenceError: Cat is not defined


