'use strict';

const myString = function(str) {
    if (typeof str !== 'string') {
        return alert(' Не является строкой ');
    } else {
        console.log('Все хорошо');
    }
}

myString(4444);