// Задание 3

// Создать интерактивную веб-страницу, где пользователи могут выбирать различные элементы мебели (например, столы, стулья, диваны) и их параметры (материал, цвет, стиль). Выбранные параметры должны быть сохранены так, чтобы при повторном посещении сайта пользователь мог видеть свой ранее собранный комплект мебели.

const inputGood = document.querySelector('.inputGood');
const inputOptions = document.querySelector('.inputOptions');

inputGood.value = localStorage.key(0);
inputOptions.value = localStorage.getItem(inputGood.value);

inputGood.addEventListener('change', (event) => {
    localStorage.clear();
    localStorage.setItem(inputGood.value, inputOptions.value);
    // inputGood.value='';
});

inputGood.addEventListener('click', (event) => {
    // localStorage.setItem(inputGood.value, inputOptions.value);
    inputGood.value = '';
});

inputOptions.addEventListener('change', (event) => {
    localStorage.setItem(inputGood.value, inputOptions.value);
});

inputOptions.addEventListener('click', (event) => {
    // localStorage.setItem(inputGood.value, inputOptions.value);
    inputOptions.value = '';
});