'use strict'

let now = new Date();
let day = now.getDay();
let month = now.getMonth();
let date = now.getDate();
let year = now.getFullYear();
let hour = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getUTCSeconds();

// Преобразуем недели
switch (day) {
    case 0:
        day = 'Воскресенье';
        break;
    case 1:
        day = 'Понедельник';
        break;
    case 2:
        day = 'Вторник';
        break;
    case 3:
        day = 'Среда';
        break;
    case 4:
        day = 'Четверг';
        break;
    case 5:
        day = 'Пятница';
        break;
    case 6:
        day = 'Суббота';
        break;
}

// Преобразуем месяца
switch (month) {
    case 0:
        month = "января";
        break;
    case 1:
        month = "февраля";
        break;
    case 2:
        month = "марта";
        break;
    case 3:
        month = "апреля";
        break;
    case 4:
        month = "мае";
        break;
    case 5:
        month = "июня";
        break;
    case 6:
        month = "июля";
        break;
    case 7:
        month = "августа";
        break;
    case 8:
        month = "сентября";
        break;
    case 9:
        month = "октября";
        break;
    case 10:
        month = "ноября";
        break;
    case 11:
        month = "декабря";
        break;
}

// Вывод
console.log(`Сегодня: ${day}, ${date} ${month} ${year} года, ${hour} часов ${minutes} минут ${seconds} секунд`);