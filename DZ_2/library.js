// Задание 1
// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

class Library {

    #books = [];

    getSet = (arr) => {
        const set = new Set();
        arr.forEach(element => {
            set.add(element.tytle);
        });
        return set;
    }

    hasBook = (title) => {
        return (this.getSet(this.#books).has(title)) ? true : false;
    }

    constructor(list) {
        try {
            if (this.getSet(list).size !== list.length) {
                throw new Error('Список книг с дублями');
            }
            this.#books = list;
            console.log('Библиотека создана.');
        } catch (error) {
            console.error('Ошибка создания библиотеки: ', error.message);
        }

    }

    get allBooks() {
        return this.#books;
    }

    addBook = (author, title) => {
        try {
            if (this.hasBook(title)) {
                throw new Error('Книга уже в списке');
            }
            this.#books.push({ author: author, tytle: title });
            console.log('Книга добавлена');
        } catch (error) {
            console.error('Ошибка добавления в список: ', error.message);
        }

    }

    removeBook = (title) => {
        try {
            if (!this.hasBook(title)) {
                throw new Error('Книги нет в списке');
            }
            const index = Array.from(this.getSet(this.#books)).indexOf(title);
            this.#books.splice(index, 1);
            console.log('Книга удалена');
        } catch (error) {
            console.error('Ошибка удаления: ', error.message);
        }

    }
}


const list = [{ author: 'Tolstoy', tytle: 'War end Peace' }, { author: 'Dostoevsky', tytle: 'Idiot' }, { author: 'Dostoevsky', tytle: 'Demons' }];

const list1 = [{ author: 'Tolstoy', tytle: 'War end Peace' }, { author: 'Dostoevsky', tytle: 'Idiot' }, { author: 'Dostoevsky', tytle: 'Demons' }, { author: 'Tolstoy', tytle: 'War end Peace' }];

const library1 = new Library(list1); // library.js:32 Ошибка создания библиотеки:  Список книг с дублями

const library = new Library(list); // Библиотека создана.
console.log(library.allBooks);

library.addBook('Tolstoy', 'War end Peace'); // Ошибка добавления в список:  Книга уже в списке

library.addBook('Tolstoy', 'Anna Karenina'); // Книга добавлена
console.log(library.allBooks);

library.removeBook('Dem'); // Ошибка удаления:  Книги нет в списке
console.log(library.allBooks);

library.removeBook('Demons'); // Книга удалена
console.log(library.allBooks); 
