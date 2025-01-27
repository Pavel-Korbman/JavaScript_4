// Задание 1 
// Создать механизм для безопасного добавления метаданных к объектам книг с использованием Symbol. 
// 1. Создать уникальные символы для метаданных: отзывы, рейтинг, теги. 
// 2. Реализовать функции addMetadata (добавление метаданных) и getMetadata (получение метаданных). 
// 3. Создать объект книги, добавить метаданные и вывести их на консоль.

/*
const idReviews = Symbol('reviews');
const idRating = Symbol('rating');
const idTags = Symbol('tags');

function addMetadata(book, reviews, rating, tags) {
    book.metaData = {
        [idReviews]: reviews,
        [idRating]: rating,
        [idTags]: tags
    }
}

function getMetadata(book) {
    return {
        reviews: book.metaData[idReviews],
        rating: book.metaData[idRating],
        tags: book.metaData[idTags]
    }
}

const book1 = {
    title: '1984',
    autor: 'George Orwell'
}

addMetadata(book1, { pavel: 'Очень сильная книга', elena: 'очень современно' }, 4.9, ['классика', 'антиутопия', 'фантастика']);

console.log(getMetadata(book1));
*/

function addMetadata(book, metaDataType, data) {
    (book[metaDataType]) ? book[metaDataType].push(data) : book[metaDataType] = [data];
}

function getMetadata(book, metaDataType) {
    return book[metaDataType];
}

const book1 = {
    title: '1984',
    autor: 'George Orwell'
}

const typeReviews = Symbol('reviews');
const typeRating = Symbol('rating');
const typeTags = Symbol('tags');

addMetadata(book1, typeReviews, 'Очень сильная книга');
addMetadata(book1, typeReviews, 'очень современно');
addMetadata(book1, typeRating, 4.9);
addMetadata(book1, typeRating, 5);
addMetadata(book1, typeTags, 'фантастика');
addMetadata(book1, typeTags, 'антиутопия');

console.log(getMetadata(book1, typeReviews)); // (2) ['Очень сильная книга', 'очень современно']
console.log(getMetadata(book1, typeRating)); // (2) [4.9, 5]
console.log(getMetadata(book1, typeTags)); // (2) ['фантастика', 'антиутопия']


// Задание 2 
// Используя Symbol.iterator, создайте объект "Библиотека", который можно итерировать. Каждая итерация должна возвращать следующую книгу из библиотеки. 1. Создайте объект library, который содержит массив книг и имеет свойство символ Symbol.iterator. 
// 2. Реализуйте кастомный итератор для объекта library. Итератор должен перебирать книги по порядку. 
// 3. Используйте цикл for...of для перебора книг в библиотеке и вывода их на консоль.

// const books = [{title: '1984', author: 'George Orwell'}, {title: 'Fahrenheit 451', author: 'Ray Bradbury'}, {title: 'War and Piece', author: 'Lev Tolstoy'},]

const library = {
    books: [{ title: '1984', author: 'George Orwell' }, { title: 'Fahrenheit 451', author: 'Ray Bradbury' }, { title: 'War and Piece', author: 'Lev Tolstoy' }],

    [Symbol.iterator]() {
        this.current = 0;
        return this;
    },
    next() {
        return this.current < this.books.length ? { done: false, value: this.books[this.current++] } : { done: true };
    }

};

for (const book of library) {
    console.log(`автор: ${book.author} книга: ${book.title}`);
};


// Задание 3
// Часто при работе с DOM мы сталкиваемся с коллекциями элементов, которые не являются стандартными массивами, но похожи на них. Однако у таких коллекций нет методов массива, и здесь на помощь приходит Array.from. В этом задании вы научитесь конвертировать коллекции DOM-элементов в массивы и работать с ними. Дан код html:
/*
<div>Элемент 1</div>
<div data-active = 'true'>Элемент 2</div>
<div>Элемент 3</div>
<div data-active = 'true'>Элемент 4</div> */

// Напишите функцию, которая собирает все элементы <div> на странице, преобразует их в массив и фильтрует только те из них, у которых есть атрибут data-active. Выведите результат на консоль.

const els = Array.from(document.querySelectorAll('div'));

// els.forEach((e) => {
//     if (e.getAttribute('data-active')) { console.log(e.textContent); }
// }); 

// const activeEls = els.filter(e => e.getAttribute('data-active'));
const activeEls = els.filter(e => e.hasAttribute('data-active'));
// const activeEls = els.filter(e => e.dataset.active);

activeEls.forEach(e => { console.log(e); });

// Задание 4 
// Представьте себе ситуацию: у нас есть группа студентов, и мы хотим отследить, кто из них посетил какие уроки и кто из преподавателей вёл данные уроки. 
// 1. Map будет использоваться для хранения соответствия между уроком и преподавателем. 
// 2. Set будет использоваться для хранения уникальных уроков, которые посетил каждый студент.

const lessons = new Map();
lessons.set('Математика', 'Смирнов');
lessons.set('История', 'Иванова');

const students = new Map();
students.set('ст. Петров', new Set(['Математика']));
students.set('ст. Сидоров', new Set(['История']));
students.set('ст. Ломоносов', new Set(['Математика', 'История']));

console.log(`Препод по математике: ${lessons.get('Математика')}`); // Препод по математике: Смирнов
console.log(`Уроки Ломоносова: ${Array.from(students.get('ст. Ломоносов'))}`); 
// Уроки Ломоносова: Математика,История
console.log(`Уроки Ломоносова: ${[...students.get('ст. Ломоносов')]}`);
// Уроки Ломоносова: Математика,История
