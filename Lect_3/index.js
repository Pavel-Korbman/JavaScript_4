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

calculateSumm(3, 4).then((res) => {
    console.log('Сумма = ', res);
})