// Опциональная цепочка вызовов ?.

// 💡 Позволяет избежать генерации ошибок при
// несуществующем (равным null или undefined) элементе
// цепочки объекта

const user = {
    name: 'Pavel',
    age: 50,
    address: {
        city: 'Moscow',
        street: 'Supruna',
        building: 12
    },
    contacts: {
        mail: 'pavel@mail.ru',
        tel: '+7 777 777 77 77'
    }
}

const email = user?.contacts?.mail; // 
console.log(email); // pavel@mail.ru

console.log(user?.contacts1?.mail); // undefined - не выдаёт ошибку

const email1 = user?.contacts-1?.mail ?? 'Присваиваем дефолтное значение';
console.log(email1); // Присваиваем дефолтное значение

const email2 = user?.contacts?.mail ?? 'Присваиваем дефолтное значение';
console.log(email2); // pavel@mail.ru







