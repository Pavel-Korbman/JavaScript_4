// Страница добавления отзыва:

// Поле для ввода названия продукта.
// Текстовое поле для самого отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

const goodField = document.querySelector('.goodfield');
const feedbackField = document.querySelector('.feedbackfield');
const setButton = document.querySelector('.set');


// content.textContent = localStorage.getItem('content') || '';
// const feedbacks = localStorage.getItem(el.textContent).split(',');

setButton.addEventListener('click', () => {
    if (goodField.value && feedbackField.value) {
        const feedbacks = localStorage.getItem(goodField.value.trim()).split(',') || [];
        feedbacks.unshift(feedbackField.value.trim());
        localStorage.setItem(goodField.value.trim(), feedbacks);
        alert('Отзыв сохранён');
        goodField.value = '';
        feedbackField.value = '';
    } else { alert('Необходимо заполнить все поля'); }
});

const feedbacks = localStorage.getItem('f').split(',') || [];