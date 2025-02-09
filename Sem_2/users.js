// Задание 2 
// У вас есть базовый список пользователей. Некоторые из них имеют информацию о своем премиум-аккаунте, а некоторые – нет. Ваша задача – создать структуру классов для этих пользователей и функцию для получения информации о наличии премиум-аккаунта, используя Опциональную цепочку вызовов методов, оператор нулевого слияния и instanceof. 
// 1. Создайте базовый класс User с базовой информацией (например, имя и фамилия). 
// 2.  4. Создайте классы PremiumUser и RegularUser, которые наследуются от User. Класс PremiumUser должен иметь свойство premiumAccount (допустим, дата истечения срока действия), а у RegularUser такого свойства нет. 
// 3. Создайте функцию getAccountInfo(user), которая принимает объект класса User и возвращает информацию о наличии и сроке действия премиум-аккаунта, используя Опциональную цепочку вызовов методов и оператор нулевого слияния. 
// 4. В функции getAccountInfo используйте instanceof для проверки типа переданного пользователя и дайте соответствующий ответ.

class User {
    #firstName;
    #secondName;

    constructor(firstName, secondName) {
        this.#firstName = firstName;
        this.#secondName = secondName;
    }
}

class PremiumUser extends User {
    premiumAccount = new Date().getFullYear() + 1;

}

class RegularUser extends User {

}

getAccountInfo = (user) => {
    try {
        if (user instanceof RegularUser || user instanceof PremiumUser) {
            console.log("Премиум-аккаунт действителен до:", user?.premiumAccount ?? 'это не премиальный пользователь');
        } else {
            throw new Error('Нет такого пользователя');
        }
    } catch (error) {
        console.error('Ошибка запроса: ', error.message);
    }
}

const user_1 = new RegularUser('Eva', 'Korbman');
const user_2 = new PremiumUser('Pavel', 'Korbman');
const user_3 = new User('Lena', 'Korbman');

getAccountInfo(user_1);
getAccountInfo(user_2);
getAccountInfo(user_3);
