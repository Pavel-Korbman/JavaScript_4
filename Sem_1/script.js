// Задание 3 
// Часто при работе с DOM мы сталкиваемся с коллекциями элементов, которые не являются стандартными массивами, но похожи на них. Однако у таких коллекций нет методов массива, и здесь на помощь приходит Array.from. В этом задании вы научитесь конвертировать коллекции DOM-элементов в массивы и работать с ними. Дан код html: 
/* 
<div>Элемент 1</div>
<div data-active = 'true'>Элемент 2</div>
<div>Элемент 3</div>
<div data-active = 'true'>Элемент 4</div> */
 
// Напишите функцию, которая собирает все элементы <div> на странице, преобразует их в массив и фильтрует только те из них, у которых есть атрибут data-active. Выведите результат на консоль.

const elements = document.querySelectorAll('div');
const els = Array.from(elements);

els.forEach((e) => {
    if (e.getAttribute('data-active')) { console.log(e.textContent); }
}
    // console.log(e.textContent);

);
