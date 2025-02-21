// Cookie 
// – это строки с данными, которые хранятся в браузере.
// Куки устанавливаются веб-сервером.
// Устанавливаются с помощью HTTP-заголовка Set-Cookie, затем браузер
// их будет вставлять во все запросы с помощью заголовка Cookie.
// Куки имеют максимальный объём данных 4Кб для одной пары ключ-значение, 
// поэтому много информации записать в них не получится.

// Напишем функцию setCookie(name, value, days), которая устанавливает cookie с указанным именем, значением и сроком действия в днях.

const setCookie = (name, value, days) => {
    let expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);

    let cookieValue = encodeURIComponent(value) + '; expires=' + expirationDate.toUTCString();
    document.cookie = name + '=' + cookieValue;
};

setCookie('username', 'Pavel Korbman', 7);
setCookie('userinfo', 'Mister', 5);
setCookie('userinfo2', 'Mister2', 6);

// Напишем функцию getCookie(name), 
// которая возвращает значения cookie с указанным именем: 

const getCookie = (name) => {
    let cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        let [cookieName, cookieValue] = cookie.trim().split('=');
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
};

let username = getCookie('username');
console.log('Значение cookie "username": ', username);

// Напишем функцию deleteCookie(name), 
// которая удаляет cookie с указанным именем: 

const deleteCookie = (name) => {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
};

// deleteCookie('userinfo2');
deleteCookie('username');