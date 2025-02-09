// Пользовательские ошибки
// Для отладки кода мы можем генерировать свои ошибки с помощью оператора
// throw.

// throw 'Какая то ошибка'; // try-catch.js:46 Uncaught Какая то ошибка

// class CustomError extends Error {
  
// }

class CustomError extends Error {
    constructor(message) {
        super(message); // Вызов конструктора родительского класса Error с переданным сообщением
        this.name = 'CustomError';
    }
}

function validateNumber(value) {
    if (typeof value !== 'number') {
        throw new CustomError('Значение должно быть числом'); // Выбрасывание пользовательской ошибки с сообщением 
    }
    console.log('Валидация успешна');
}

try {
    validateNumber('42'); // custom_error.js:29 Ошибка: Значение должно быть числом
    // Тип ошибки: CustomError
    // validateNumber(42); // Валидация успешна
} catch (error) {
    if (error instanceof CustomError) { // Проверяем является ли ошибка экземпляром пользовательской ошибки
        console.error('Ошибка:', error.message);
        console.log('Тип ошибки:', error.name);
    } else {
        console.error('Ошибка:', error);
    }
}
