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
console.log(frameCount); // 1

const parentFrame = frame.parent;
console.log(parentFrame); // Window

const parentFrame1 = window.parent;
console.log(parentFrame1); // Window

// Работа с globalThis

const globalObject = globalThis; // Получает глобальный объект
globalThis.newVariable = 'Hello World'; // Определяет новую глобальную переменную
const globalVariable = globalThis.window === globalThis.self ? 'window' : 'worker'; // Получает доступ к глобальным переменным из разных сред исполнения

var glob = 15;

function increment(val) {
    return val + 1;
}

console.log(window.glob); // 15
console.log(window.increment);
//ƒ increment(val) {
//     return val + 1;
// }

console.log(alert === window.alert); // true

// alert('Можно так');
// window.alert('А можно и так');

const local = 25;

let localFunction = (val) => {
    return val + 1;
}
console.log(local); // 25
console.log(localFunction);
// (val)=>{
//     return val+1;
// }

console.log(window.local); // undefined
console.log(window.localFunction); // undefined


// Объект функции 
// хранит в себе методы и свойства, присущие для функций:
// 📌 Свойство name, в котором содержится имя функции;
// 📌 Свойство length, в котором хранится число параметров, которые ожидает функция.
// Внутри функции доступен массив arguments с перечислением параметров функции

function sayHello() {
    console.log('Hello!');
}

console.log(sayHello.name); // sayHello
console.log(window.name); // имя окна браузера, если оно задано или пустую строку

console.log(frames[0].name); // имя фрейма, если оно задано или пустую строку

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

const rect = new Rectangle(10, 5);

console.log(rect.name); // undefined
console.log(rect.constructor.name); // Rectangle



