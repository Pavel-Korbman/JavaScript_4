// LocalStorage и SessionStorage
// - представляют собой
// хранилище браузера, в которое мы по своему усмотрению
// можем записать и считать данные из любого места
// скрипта.
// В отличие от cookie, они никак не зависят от наличия
// сервера и хранить можно гораздо больше данных.
// Данные LocalStorage не удаляются при закрытии браузера
// и хранятся там, пока какое-то событие их не изменит
// или не очистит.
// При обновлении страницы данные сохранятся,
// но при закрытии браузера или вкладки удаляются.
// С этим и связано весьма ограниченное использование SessionStorage.

// Методы у LocalStorage и SessionStorage одинаковы:
// 💡 setItem(ключ, значение) – сохранить элемент с ключом «ключ» и данными «значение»
// 💡 getItem(ключ) – получить значение по ключу
// 💡 removeItem(ключ) – удалить пару «ключ» и «значение» по заданному ключу
// 💡 key(номер позиции) – получить ключ на заданной позиции
// 💡 length – количество элементов в хранилище
// 💡 clear() – очистка хранилища

// Пример 1
// Получение и установка значения из LocalStorage

localStorage.setItem('username', 'Pavel');
localStorage.setItem('username1', 'Lena');
localStorage.setItem('username2', 'Eva');

const storedUsername = localStorage.getItem('username');
console.log('Значение из localStorage: ', storedUsername); // 

// Удаление из LocalStorage

localStorage.removeItem('username');

console.log(localStorage.getItem('username'));

// Очистка LocalStorage

console.log(localStorage); // Storage {username2: 'Eva', username1: 'Lena', length: 2}

// localStorage.clear();

console.log(localStorage); // Storage {length: 0}

// Пример 2
// Счётчик в LocalStorage

// localStorage.clear();

// 1 вар:

// if (localStorage.getItem('counter')) { // Если счётчик есть
//     let counter = parseInt(localStorage.getItem('counter')) + 1; // увеличиваем на 1

//     localStorage.setItem('counter', counter.toString()); // записываем в LocalStorage
// } else {
//     localStorage.setItem('counter', '1');
// }

// // 1 вар с сокращённый:
// (localStorage.getItem('counter'))? localStorage.setItem('counter', (parseInt(localStorage.getItem('counter')) + 1).toString()) : localStorage.setItem('counter', '1');

// 2 вар:

// let counter = localStorage.getItem('counter')? parseInt(localStorage.getItem('counter')) : 0;
// counter++;
// localStorage.setItem('counter', counter.toString());

// console.log('Счётчик загрузок страницы: ', localStorage.getItem('counter'));

// 3 вар:
// Счётчик по кнопке
let counter = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;

const updateCounter = () => {
    counter++;
    localStorage.setItem('counter', counter.toString());
}

document.querySelector('.counter').textContent = counter; // выводим значение на стр.

document.querySelector('.increment').addEventListener('click', () => {
    updateCounter();
    document.querySelector('.counter').textContent = counter;
}); // обработчик события для кнопки счётчика

document.querySelector('.clear').addEventListener('click', () => {
    counter = -1;
    updateCounter();
    document.querySelector('.counter').textContent = 0;
});


// Пример 3
// Заполнение и хранение списка в LocalStorage

const inputField = document.getElementById('item-input');
const addButton = document.getElementById('add-button');
const itemList = document.getElementById('item-list');

// Получаем список из localStorage 
let shoppingList = JSON.parse(localStorage.getItem('shoppinglist')) || [];

// Vtnjl j,yjdktybz cgbcrf
const updateShoppingList = () => {
    itemList.innerHTML = ''; // очищаем список на стр.
    
    shoppingList.forEach(element => {
        const listItem = document.createElement('li');
        listItem.textContent = element;
        itemList.append(listItem);
    }); // Обновляем на странице
    
    localStorage.setItem('shoppinglist', JSON.stringify(shoppingList)); // записываем в localStorage
}

// Обработчик для кнопки добавления:

addButton.addEventListener('click', ()=>{
    const newItem = inputField.value.trim(); // trim() - убирает пробелы до и после

    if(newItem!==''){
        shoppingList.push(newItem);
        inputField.value ='';
        updateShoppingList();
    }
})

updateShoppingList(); // Обновляем список при загрузке стр.