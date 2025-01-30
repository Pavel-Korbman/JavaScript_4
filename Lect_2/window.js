// Глобальный объект
// — хранит функции и переменные,которые могут быть доступны в любой части программы. По умолчанию — это встроенные объекты. Например,в браузере это объект window, а вNode.js —это объект global. Обратиться к объекту window можно как напрямую, так и используя его свойства self и frames: В последних стандартах введён новый глобальный объект globalThis, призванный стандартизировать обращение к глобальным объектам. В браузере он вернёт объект window.

console.log(window); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
console.log(window.window); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
console.log(self); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
console.log(globalThis); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
console.log(globalThis === window); // true

// Частью глобального объекта становятся объекты пользователя: 
// 📌 Переменные, объявленные с помощью var 
// 📌Функции, объявленные с помощью ключевого слова function 
// 
// Не становятся частью глобального объекта: 
// 📌 Переменные, объявленные с помощью let и const 
// 📌Функции, объявленные с помощью выражений

// 💡 Частью глобального объекта являются все встроенные объекты JavaScript 
// 💡 Любую переменную тоже можно сделать частью глобального объекта, записав её как свойство

// Работа с window

// const newWindow = window.open('http://yandex.ru/', '_blank');
// window.open('http://yandex.ru/', '_blank'); // автоматически открывает ссылку в новом окне

// window.close(); // автоматически закрывает текущее окно

// window.resizeTo(800, 600); // изменение размера окна на 800 х 600 px

// window.location.href = 'http://exemple.com/'; // перенаправляет на другую страницу

const windowWidth = window.innerWidth; // получаем ширину окна
console.log(windowWidth); //1326

// Работа с window.window

// const isWindowOpen = window.window.open('http://yandex.ru/') !== null; // проверяет открыто ли окно
// console.log(isWindowOpen); // true

const windowHeight = window.window.innerHeight; // получаем высоту окна
console.log(windowHeight); // 1226

// window.window.location.href = 'http://exemple.com/'; // перенаправляем на другой адрес в текущем окне

// Работа с self
// ВСЁ ТО ЖЕ САМОЕ
const windowHeight1 = self.innerHeight; // получаем высоту окна
console.log(windowHeight1); // 1226

// Работа с frames

// Фреймы - это элементы HTML, которые используются для внедрения в текущую страницу других веб-страниц.

const frame = frames[0]; // ссылка на фрейм по индексу

const frameCount = frames.length;
console.log(frameCount);

const parentFrame = frame.parent;
console.log(parentFrame);

const parentFrame1 = window.parent;
console.log(parentFrame1);
