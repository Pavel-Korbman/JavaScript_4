// Защищённые и приватные свойства класса

// Свойства - аксессоры
// Свойствами-аксессорами называются методы внутри объекта, которые используются для присвоения значения свойству объекта и для получения его значения. Но во внешнем коде они выглядят как свойства.

// Таких методов два:
// 📌 Сеттер – для присвоения значения
// 📌 Геттер – для получения значения

// В коде перед ними устанавливаются ключевые слова set и get соответственно. 

// Названия сеттера и геттера для свойства в классе должно быть идентичным имени этого свойства.

// 💡 Защищённое свойство
// Свойство, которое защищено от изменений вне класса

// class AutoMobile {
//     _horsePower = 0; // Защищённое свойство

//     set horsePower(value) {
//         if (value < 0) throw new Error("Отрицательная мощность");
//         this._horsePower = value;
//     }

//     get horsePower() {
//         return this._horsePower;
//     }

//     constructor(power) {
//         this._horsePower = power;
//     }

// }


// let auto = new AutoMobile(100);
// console.log(auto.horsePower);
// // auto.horsePower = -100; // Uncaught Error: Отрицательная мощность
// auto.horsePower = 500; // сработает, только если в классе есть сеттер - set horsePower(value)
// console.log(auto.horsePower);

// 💡 Приватное свойство
// Свойство, которое недоступно вне класса без использования
// свойств - аксессоров

// class AutoMobile {
//     #horsePower = 0; // Защищённое свойство

//     // set horsePower(value) {
//     //     if (value < 0) throw new Error("Отрицательная мощность");
//     //     this.#horsePower = value;
//     // }

//     // get horsePower() {
//     //     return this.#horsePower;
//     // }

//     constructor(power) {
//         this.#horsePower = power;
//     }

// }

// let auto = new AutoMobile(2000);
// console.log(auto); // AutoMobile {#horsePower: 2000}
// console.log(auto.horsePower); // undefined

// auto.horsePower = 3000;
// console.log(auto); // AutoMobile {horsePower: 3000, #horsePower: 2000}
// console.log(auto.horsePower); // 3000



class AutoMobile {
        #horsePower = 0; // Защищённое свойство
    
        set horsePower(value) {
            if (value < 0) throw new Error("Отрицательная мощность");
            this.#horsePower = value;
        }
    
        get horsePower() {
            return this.#horsePower;
        }
    
        constructor(power) {
            this.#horsePower = power;
        }
    
    }
    
    let auto = new AutoMobile(2000);
    console.log(auto); // AutoMobile {#horsePower: 2000}
    console.log(auto.horsePower); // 2000
    
    auto.horsePower = 3000;
    console.log(auto); // AutoMobile {#horsePower: 2000}
    console.log(auto.horsePower); // 3000

    
    




