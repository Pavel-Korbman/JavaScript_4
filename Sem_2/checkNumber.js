// Задание 3 
// Вы создаете интерфейс, где пользователь вводит число. Ваша задача — проверить, является ли введенное значение числом или нет, и дать соответствующий ответ. 
// 1. Создайте HTML-структуру: текстовое поле для ввода числа и кнопку "Проверить". 
// 2. Добавьте место (например, div) для вывода сообщения пользователю. 
// 3. Напишите функцию, которая будет вызвана при нажатии на кнопку. Эта функция должна использовать try и catch для проверки вводимого значения.

function checkNumber() {
    let number = document.querySelector('.number').value;
    let res =document.querySelector('.res');
    try {
        if (!isNaN(number) && number!=='') {
            res.textContent=`${number} - это число`;
        } else {
            throw new Error('Это не число');
        }

    } catch (error) {
        res.textContent=`Ошибка ввода: ${error.message}`;
    }

}

const button = document.querySelector('.button');
button.addEventListener('click', () => checkNumber());
