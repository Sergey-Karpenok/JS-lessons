'use strict'


// Вывод

let showTime = function() {

    let now = new Date();
    let day = now.getDay();
    let month = now.getMonth();
    let date = now.getDate();
    let year = now.getFullYear();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getUTCSeconds();
    let monthNum = now.getMonth();

    let changeHour = function(hour) {
        let changedHour = '';
        switch (hour) {
            case 1:
            case 21:
                changedHour = 'час';
                break;
            case 2:
            case 3:
            case 4:
            case 22:
            case 23:
            case 24:
                changedHour = 'часа';
                break;
            default:
                changedHour = 'часов';
                break;
        }
        return changedHour;
    }

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

    let setZero = function(num) {
        if (num < 9) {
            return num = '0' + num;
        } else {
            return num;
        }
    }

    function declOfNum(n, text_forms) {
        n = Math.abs(n) % 100;
        var n1 = n % 10;
        if (n > 10 && n < 20) { return text_forms[2]; }
        if (n1 > 1 && n1 < 5) { return text_forms[1]; }
        if (n1 == 1) { return text_forms[0]; }
        return text_forms[2];
    }

    console.log(`Сегодня: ${day}, ${date} ${month} ${year} года, ${hour} ${changeHour(hour)} ${minutes} ${declOfNum(minutes, ['минута', 'минуты', 'минут'])} ${seconds} ${declOfNum(seconds, ['секунда', 'секунды', 'секунд'])}`);

    console.log(`${setZero(date)}.${setZero(monthNum)}.${year} - ${setZero(hour)}:${setZero(minutes)}:${setZero(seconds)}`)
}

let timerId = setInterval(() => showTime(), 1000);

setTimeout(() => {
    clearInterval(timerId);
    alert('stop');
}, 12000);