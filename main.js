'use strict';

const isString = function(str) {
    if (typeof str !== 'string') {
        return alert(' Не является строкой ');
    } else {
        str = str.trim();
    }
    if (str.length > 30) {
        let newStr = str.slice(0, 29) + '...'
        console.log(newStr);
    } else {
        console.log(str);
    }
}