// Задание 1 
// Вы разрабатываете прототип веб-приложения для чтения новостей. 
// Статьи "хранятся" во внутреннем массиве (имитируя базу данных). Когда пользователь нажимает на кнопку "Загрузить новости", ваш код должен имитировать задержку, словно происходит реальная загрузка данных из внешнего источника, а после этой задержки — отображать новости на странице.

//1. Создайте базовую HTML-структуру с кнопкой для загрузки новостей и контейнером для их отображения. 
//2. Реализуйте функцию fetchNews(), возвращающую промис. Эта функция должна имитировать задержку в 2 секунды перед успешным возвращением данных из "виртуальной" базы данных. Для добавления интереса: с вероятностью 10% она должна возвращать ошибку вместо данных. 
//3. При нажатии на кнопку "Загрузить новости" вызывайте функцию fetchNews(), обрабатывая успешное выполнение и ошибки с использованием then() и catch(). 
//4. При успешной загрузке отобразите статьи на странице. При ошибке покажите сообщение об ошибке. 
//5. Добавьте функционал, который отключает кнопку загрузки на время "загрузки" новостей и активирует её снова после завершения операции (будь то успешная загрузка или ошибка).

const news = [
    {
        headline: 'Заголовок 1',
        text: 'Текст статьи текст статьи  текст статьи текст статьи'
    },
    {
        headline: 'Заголовок 2',
        text: 'Текст статьи текст статьи  текст статьи текст статьи'
    },
    {
        headline: 'Заголовок 3',
        text: 'Текст статьи текст статьи  текст статьи текст статьи'
    }
]

const fetchNews = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // const randomNumber = Math.floor(Math.random() * 10) + 1;            
            if (Math.random() > 0.1) {
                resolve(news);
            } else {
                reject('Ошибка загрузки');
            }
        }, 1000)
    });
}

const button = document.querySelector('.load');
const newsList = document.querySelector('.news');

button.addEventListener('click', () => {
    newsList.innerHTML = '';
    fetchNews()
        .then((news) => {
            news.forEach(element => {
                const title = document.createElement('h2');
                title.textContent = element.headline;
                newsList.appendChild(title);
                const content = document.createElement('p');
                content.textContent = element.text;
                newsList.appendChild(content);
            });
        })
        .catch((error) => {
            const err = document.createElement('h2');
            err.textContent = error;
            newsList.appendChild(err);
        });
})

