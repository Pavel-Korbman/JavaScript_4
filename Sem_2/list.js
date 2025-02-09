// Задание 4 
// Пользователи вашего сайта могут добавлять элементы в список. 
// Но есть условие: введенное значение должно содержать от 3 до 10 символов. 
// 1. Создайте HTML-структуру с текстовым полем, кнопкой и списком. 
// 2. Напишите функцию, которая будет добавлять элементы в список или генерировать исключение, если длина введенного значения не соответствует требованиям.

function addElement() {
    let element = document.querySelector('.element').value;
    let list =document.querySelector('.list');
    let res =document.querySelector('.res-1');
    try {
        if (element.length >=3 && element.length <=10 ) {       
            const li = document.createElement('li');
            li.textContent = element;
            list.appendChild(li);
        } else {
            throw new Error('Не правильная длинна слова');
        }

    } catch (error) {
        res.textContent=`Ошибка ввода: ${error.message}`;
    }

}

const button1 = document.querySelector('.button-1');
button1.addEventListener('click', () => addElement());