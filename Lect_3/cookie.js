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