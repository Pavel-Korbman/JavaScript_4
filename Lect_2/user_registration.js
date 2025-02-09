// Система регистрации пользователя в приложении

const App = {}; // глобальный объект

class User {
    #_name;
    constructor(name) {
        this.#_name = name;
    }
    getName() {
        return this.#_name;
    }
}

// Функция регистрации пользоваиеля:

App.registrationUser = (userName, email, password) => {
    try {
        if (!userName || !email || !password) {
            throw new Error('Не все данные введены');
        }

        const user = new User(userName); // экземпляр пользователя

        const userData = { // данные пользователя
            name: user.getName,
            email,
            password
        }

        // Здесь можно добавить сохранение пользователя в базу или отправку данных на сервер

        console.log(`Пользователь ${user.getName} успешно зарегистрирован`);
        console.log('Данные пользователя', userData);

    } catch (error) {
        console.error('Ошибка регистрации', error.message);
    } finally {
        console.log('Процесс регистрации завершен');
    }
}

App.registrationUser('Pavel Korbman', 'pavel@male.ru', 'pass123');
App.registrationUser('Eva Korbman', 'eva@male.ru', 'pass456');
App.registrationUser('Elena Korbman', '', 'pass7');

