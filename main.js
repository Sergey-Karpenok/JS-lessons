'use strict';

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let arr = [];

for (let i = 0; i < 7; i++) {
    arr[i] = getRandomInRange(12345, 9999999999999) + '3';
}

for (let i = 0; i < 7; i++) {
    if (arr[i].startsWith('2') || arr[i].startsWith('4')) {
        console.log(arr[i]);
    }
}

for (let i = 2; i <= 100; i++) {
    for (let j = 2; j < i; j++) {
        if ((i % j == 0) && (i != j)) {
            break;
        }
        console.log(i);
    }
};