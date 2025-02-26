// Задание 2
// Создать интерактивную веб-страницу, где пользователи могут вводить текст, сохранять его в localStorage, а затем загружать или удалять сохраненные данные.

// Разработка Интерфейса: 
// Создать HTML-страницу с: 
// ● Одним текстовым полем для ввода данных пользователем. 
// ● Тремя кнопками: "Сохранить", "Загрузить" и "Очистить". 
// ● Местом для отображения сохраненного текста. 
// 
// Программирование Логики на JavaScript: 
// 1. При нажатии на "Сохранить", введенный текст должен сохраняться в localStorage. 
// 2. При нажатии на "Загрузить", текст из localStorage должен отображаться на странице. 
// 3. При нажатии на "Очистить", сохраненный текст должен быть удален из localStorage, и соответствующее сообщение отображается на странице.

const inputField = document.querySelector('.input');
const setButton = document.querySelector('.set');
const getButton = document.querySelector('.get');
const delButton = document.querySelector('.del');
const content = document.querySelector('.content');

// content.textContent = localStorage.getItem('content') || '';

setButton.addEventListener('click', () => {
    if (inputField.value) {
        localStorage.setItem('content', inputField.value.trim());
    };
})

getButton.addEventListener('click', () => {
    content.textContent = localStorage.getItem('content') || 'Текста нет';    
})

delButton.addEventListener('click', () => {
    localStorage.clear(); 
})

