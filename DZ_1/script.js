// Задание 1
/*
• Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

• Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

{
title: "Название альбома",
artist: "Исполнитель",
year: "Год выпуска"
}

• Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
• Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: 
Название альбома - Исполнитель (Год выпуска)
*/

const musicCollection = {
    albums: [
        { title: 'Album-1', artist: 'Artist-1', year: '2000' },
        { title: 'Album-2', artist: 'Artist-2', year: '2001' },
        { title: 'Album-3', artist: 'Artist-3', year: '2003' }
    ],

    [Symbol.iterator]() {
        this.current = 0;
        return this;
    },
    next() {
        return (this.current < this.albums.length) ?
            { done: false, value: this.albums[this.current++] }
            : { done: true };
    }

};

for (const album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
};

// Задание 2
/*
Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

Необходимо создать систему управления этими заказами, которая позволит:

• Отслеживать, какой повар готовит какое блюдо.
• Записывать, какие блюда заказал каждый клиент.

Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. 
В качестве ключей для клиентов используйте объекты.

Повара и их специализации:

Виктор - специализация: Пицца.
Ольга - специализация: Суши.
Дмитрий - специализация: Десерты.

Блюда и их повара:

Пицца "Маргарита" - повар: Виктор.
Пицца "Пепперони" - повар: Виктор.
Суши "Филадельфия" - повар: Ольга.
Суши "Калифорния" - повар: Ольга.
Тирамису - повар: Дмитрий.
Чизкейк - повар: Дмитрий.

Заказы:

Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
Клиент Ирина заказала: Чизкейк. 
*/

const menu = {
    pizza: new Set(['Пицца "Маргарита"', 'Пицца "Пепперони"']),
    sushi: new Set(['Суши "Филадельфия"', 'Суши "Калифорния"']),
    dessert: new Set(['Тирамису', 'Чизкейк'])
}

const chefSpecialty = new Map();
chefSpecialty
    .set(menu.pizza, 'Виктор')
    .set(menu.sushi, 'Ольга')
    .set(menu.dessert, 'Дмитрий');

const orders = new Map();
orders
    .set({ clientName: 'Алексей' }, new Set([Array.from(menu.pizza)[1], Array.from(menu.dessert)[0]]))
    .set({ clientName: 'Мария' }, new Set([Array.from(menu.sushi)[1], Array.from(menu.pizza)[0]]))
    .set({ clientName: 'Ирина' }, new Set([Array.from(menu.dessert)[1]]));

console.log(`${chefSpecialty.get(menu.pizza)} - специализация: Пицца`);
console.log(`${chefSpecialty.get(menu.sushi)} - специализация: Суши`);
console.log(`${chefSpecialty.get(menu.dessert)} - специализация: Десерты`);

Array.from(menu.pizza).forEach(e => {
    console.log(`${e} - повар: ${chefSpecialty.get(menu.pizza)}`)
});

Array.from(menu.sushi).forEach(e => {
    console.log(`${e} - повар: ${chefSpecialty.get(menu.sushi)}`)
});

Array.from(menu.dessert).forEach(e => {
    console.log(`${e} - повар: ${chefSpecialty.get(menu.dessert)}`)
});

for (const order of orders.keys()) {
    console.log(`Клиент ${order.clientName} заказал: ${Array.from(orders.get(order))}`);
}