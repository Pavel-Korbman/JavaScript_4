// Задание 2 
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.



function addNew(index) {

    const value = document.querySelector('.input-' + index).value;
    const ul = document.querySelector('.ul-' + index);
    const errorString = document.querySelector('.error-' + index);

    try {
        if (value.length < 50 || value.length > 500) {
            throw new Error('Не правильная длинна отзыва');
        } else {
            const li = document.createElement('li');
            li.textContent = value;
            ul.appendChild(li);
            errorString.textContent = null;
            document.querySelector('.input-' + index).value = '';
        }

    } catch (error) {
        errorString.textContent = `Ошибка ввода: ${error.message}`;
    }
}

function addFeedback(index) {
    const button = document.querySelector('.button-' + index);
    button.addEventListener('click', () => addNew(index));
}

function buildFeedbacks(elements) {

    const products = document.querySelector('.products');

    for (let index = 0; index < elements.length; index++) {

        const product = document.createElement('div');
        product.className = 'product';
        products.appendChild(product);

        const title = document.createElement('h2');
        title.textContent = elements[index].product;
        product.appendChild(title);

        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'input-' + index;
        product.appendChild(input);

        const button = document.createElement('button');
        button.className = 'button-' + index;
        button.textContent = 'Добавить отзыв о ' + elements[index].product;
        product.appendChild(button);

        const error = document.createElement('p');
        error.className = 'error-' + index;
        error.textContent = ' '; //
        product.appendChild(error);

        const ul = document.createElement('ul');
        ul.className = 'ul-' + index;
        ul.textContent = 'Отзывы:'
        product.appendChild(ul);

        elements[index].reviews.forEach(e => {
            const li = document.createElement('li');
            li.textContent = e.text;
            ul.appendChild(li);
        });

        addFeedback(index);
    }
}

buildFeedbacks(initialData);