// Промис
// — это обещание, что мы сейчас запустим операцию, и она
// выполнится когда-то в будущем

// let promise = new Promise(function(resolve, reject ){
//     // функция исполнитель
// });

// Функция, переданная в конструктор промиса — это функция-исполнитель. Она сама по себе является
// коллбеком и должна будет запуститься, когда промис создастся. Аргументы коллбека внутри промиса —
// resolve и reject — это тоже, в свою очередь, коллбеки и должны будут вызваться при достижении какого-
// то результата
// Создание промиса
// 💡 Resolve вызывается при успешном завершении. Результат — value
// 💡 Reject вызывается при возникновении ошибки. Результат — error

// Свойства промиса
// У объекта promise, возвращаемого конструктором new Promise, есть внутренние свойства:
// ⚡ State («состояние») — сначала «pending» («ожидание»), потом меняется на «fulfilled»
// при успешном выполнении (выполнился resolve) или на «rejected» при возникновении
// ошибок (выполнился reject)
// ⚡ Result («результат») — во время ожидания он равен undefined, после изменится на value
// при успешном выполнении, либо на error при возникновении ошибок

// Использование промиса
// Для работы с промисами чаще всего применяется метод then

// promise.then(onfulfilled, onrejected);

// Где в качестве параметров onfulfilled и onrejected почти всегда выступают коллбеки-
// обработчики. Оба параметра не являются обязательными, но чаще всего then
// используется с одним параметром onfulfilled

// Задача 1:
// Напишите функцию generateRandomNumber(), которая возвращает Promise, 
// выполняющийся через 1 сек и генерирует случайное число от 1 до 10. Если произошла ошибка при генерации числа - Promise должен быть отклонён с сообщением об ошибке.

let generateRandomNumber = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 10) + 1;
            if (randomNumber) {
                resolve(randomNumber);
            } else {
                reject('Ошибка генерации случайного числа');
            }
        }, 1000)
    });
};

// Вызов функции с промисом:

generateRandomNumber()
    .then((number) => {
        console.log('Случайное число:', number);
    })
    .catch((error) => {
        console.log('Ошибка:', error);
    });

// Задача 2:
// Напишите функцию fetchData(url) , которая принимает URL и возвращает Promise , выполняющий запрос данных по данному URL. Если запрос успешен Promise должен резолвить полученные данные. Если произошла ошибка запроса - Promise должен быть отклонён с сообщением об ошибке.

let fetchData = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((error) => reject('Ошибка загрузки данных'))
    });

}

// https://api.github.com/users/1

fetchData('https://api.github.com/users/1')
    .then((data) => {
        console.log('Полученные данные: ', data);
    })
    .catch((error) => {
        console.log('Ошибка загрузки данных: ', error);
    });

// Задача 3:
// Напишите функцию checkFileExists(file) , которая принимает имя файла и возвращает Promise, выполняющийся через 2 сек. Promise должен резолвиться если файл существует и отклониться если файла нет.

let checkIfFileExists = (file) => {

};

let checkFileExists = (file) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fileExist = checkIfFileExists(file);
            if (fileExist) {
                resolve('Файл существует.');
            } else {
                reject('файл не найден.');
            }
        }, 2000);
    });
}

checkFileExists('file_1.txt')
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log('Ошибка чтения файла:', error);
    })

// Использование .then без .catch

// Задача 4:
// Напишите функцию calculateSumm(a, b) , которая принимает два числа и возвращает Promise. Promise должен быть выполнен суммой двух чисел.

const calculateSumm = (a, b) => {
    return new Promise((resolve, reject) => {
        resolve(a + b);
    });
}

calculateSumm(300, 4).then((res) => {
    console.log('Сумма = ', res); // Сумма =  304
})

calculateSumm('some', 4).then((res) => {
    console.log('Сумма = ', res); // Сумма =  some4
})

// Задача 5:
// Напишите функцию divideNumbers(a, b) , которая принимает два числа и возвращает Promise. Promise должен выполнить деление первого числа на второе. Если второе число 0 - Promise должен быть отклонён с сообщением о невозможности делить на ноль.

const divideNumbers = (a, b) => {
    return new Promise((resolve, reject) => {
        (b !== 0) ? resolve(a / b) : reject('Не возможно делить на 0');
    }
    );
}

divideNumbers(400, 3)
    .then((result) => {
        console.log('Частное = ', result); // Частное =  133.33333333333334
    })
    .catch((error) => {
        console.log('Ошибка: ', error);
    })

divideNumbers(400, 0)
    .then((result) => {
        console.log('Частное = ', result); // Ошибка:  Не возможно делить на 0
    })
    .catch((error) => {
        console.log('Ошибка: ', error);
    })

// ЦЕПОЧКИ ПРОМИСОВ:

new Promise(function (resolve) {
    setTimeout(() => resolve(1), 1000);
}).then(function (result) {
    console.log(result);
    return new Promise((resolve) => {
        setTimeout(() => resolve(result * 2), 1000);
    });
}).then(function (result) {
    console.log(result);
    return new Promise((resolve) => {
        setTimeout(() => resolve(result * 2), 1000);
    });
}).then(function (result) {
    console.log(result);
})
// Здесь мы три раза с интервалом в секунду получим три ответа. Первый промис
// через таймаут в 1 секунду выдаст результат 1 с помощью функции resolve(1), второй
// промис умножит его на 2, третий промис полученный результат из второго промиса
// умножит на 2.
// 1
// 2
// 4


// Finally

let processData = (data) => {

};

let performOperation = (data) => {
    return new Promise((resolve, reject) => {
        let result = processData(data);
        (result) ? resolve(result) : reject('Ошибка операции');
    }).finally(() => {
        console.log('Операция завершена');
    });
}

performOperation('example')
    .then((result)=>{
        console.log('Результат операции: ', result);
    })
    .catch((error)=>{
        console.log('Ошибка: ', error);
    })


//     Методы для работы с массивом промисов
// Promise.all()
// 💡 Принимает массив (или любой другой итерируемый объект) промисов и возвращает
// новый промис
// 💡 Переданные промисы будут выполнены по порядку последовательно, результатом
// выполнения будет массив результатов из каждого промиса
// 💡 Если в каком-то промисе произойдёт ошибка, то результатом выполнения будет эта
// ошибка, остальные результаты проигнорируются

