// Задание 1 
// Задание 1  
// Давайте создадим класс для управления банковским счетом. 
// В этом классе будет приватное свойство для хранения текущего баланса, а также методы для внесения и снятия денег со счета. 
// 1. Класс должен содержать приватное свойство #balance, которое инициализируется значением 0 и представляет собой текущий баланс счета. 
// 2. Реализуйте геттер balance, который позволит получить информацию о текущем балансе. 
// 3. Реализуйте метод deposit(amount), который позволит вносить средства на счет. 
// Убедитесь, что сумма внесения не отрицательная; в противном случае выбрасывайте ошибку. 
// 4. Реализуйте метод withdraw(amount), который позволит снимать средства со счета. 
// Убедитесь, что сумма для снятия неотрицательная и что на счете достаточно средств; 
// в противном случае выбрасывайте ошибку. 
// 5. Реализуйте конструктор, который принимает начальный баланс в качестве аргумента. Убедитесь, что начальный баланс не отрицательный; в противном случае выбрасывайте ошибку.

class BankAccount {
    #accountNumber;
    #balance = 0;

    constructor(accountNumber, balance) {
        try {
            if (!isNaN(balance) && balance < 0) {
                throw new Error('Не корректная сумма начального баланса');
            }
            this.#accountNumber = accountNumber;
            this.#balance = balance;
            console.log(`Создан счёт № ${this.#accountNumber} . Текущий баланс: ${this.#balance} руб.`);
        } catch (error) {
            console.error('Ошибка создания счёта', error.message);
        } finally {
            console.log('Операция завершена.');
        }
  
    }

    get balance() {
        return this.#balance;
    }

    deposit=(amount) => {
        try {
            if (!isNaN(amount) && amount <= 0) {
                throw new Error('Не корректная сумма депозита');
            }
            this.#balance += amount;
            console.log(`На счёт ${this.#accountNumber} зачислено ${amount} руб. Текущий баланс: ${this.#balance} руб.`);
        } catch (error) {
            console.error('Ошибка пополнения счёта', error.message);
        } finally {
            console.log('Операция завершена.');
        }

    }

    withdraw = (amount) => {
        try {
            if (!isNaN(amount) && amount <= 0) {
                throw new Error('Не корректная сумма снятия');
            }
            if (amount > this.#balance) {
                throw new Error('Не достаточно средств');
            }
            this.#balance -= amount;
            console.log(`Со счёта ${this.#accountNumber} списано ${amount} руб. Текущий баланс: ${this.#balance} руб.`);
        } catch (error) {
            console.error('Ошибка списания средств', error.message);
        } finally {
            console.log('Операция завершена.');
        }

    }

}

const account_1 = new BankAccount(1001, 500);
console.log(account_1.balance);
account_1.deposit(200);
console.log(account_1.balance);
account_1.withdraw(100);
console.log(account_1.balance);
