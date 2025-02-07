// Особенности стрелочных функций

// 📌 Стрелочные функции не имеют своего this
// 📌 В стрелочных функциях отсутствует массив arguments
// 📌 Для однострочных стрелочных функций без выражений в фигурных
// скобках автоматически подставляется return для выражения

function regFunc() {
    console.log(this);
}

const arrowFunc = () => {
    console.log(this);
}

regFunc(); // выводит контекст выполнения например объект Window (в браузере) или Global (в Node.js)
arrowFunc(); // выводит контекст выполнения, который был определён во время создания функции (лексический контекст)



// В чём отличия?
// поместим функции в объект

const obj = {
    regMethod: function() {
        console.log(this);
    },    
    arrowMethod: () => {
        console.log(this);
    }
};

obj.regMethod(); // {regMethod: ƒ, arrowMethod: ƒ} - объект в котором функция

obj.arrowMethod(); // Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …} - стрелочная функция не имеет this и выводит глобальный объект
