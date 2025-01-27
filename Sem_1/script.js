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
    (book[metaDataType])? book[metaDataType].push(data) : book[metaDataType]=[data];
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

// Задание 3
// Часто при работе с DOM мы сталкиваемся с коллекциями элементов, которые не являются стандартными массивами, но похожи на них. Однако у таких коллекций нет методов массива, и здесь на помощь приходит Array.from. В этом задании вы научитесь конвертировать коллекции DOM-элементов в массивы и работать с ними. Дан код html:
/*
<div>Элемент 1</div>
<div data-active = 'true'>Элемент 2</div>
<div>Элемент 3</div>
<div data-active = 'true'>Элемент 4</div> */

// Напишите функцию, которая собирает все элементы <div> на странице, преобразует их в массив и фильтрует только те из них, у которых есть атрибут data-active. Выведите результат на консоль.

/*
const elements = document.querySelectorAll('div');
const els = Array.from(elements);

els.forEach((e) => {
    if (e.getAttribute('data-active')) { console.log(e.textContent); }
}
    // console.log(e.textContent);

); */
