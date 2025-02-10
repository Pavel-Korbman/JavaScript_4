// Задание 2 
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.



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