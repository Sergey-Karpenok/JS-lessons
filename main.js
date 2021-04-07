'use strict';
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};

let income = 'Инвестиции';
let mission = 700000;
let period = 6;
let money;
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Детский сад, Алименты');
let arr = addExpenses.toLowerCase().split(',');
let deposit = confirm('Есть ли у вас депозит в банке?');
let expenses = [];

const start = function() {
    do {
        money = prompt('Ваш месячный доход?');
    } while (!isNumber(money))
};

start();

const getExpensesMonth = function() {
    let sum = 0;
    let num = 0;
    for (let i = 0; i < 2; i++) {
        expenses[i] = prompt('Введите обязательную статью расходов?', 'Комунальные расходы');
        do {
            num = prompt('Во сколько это обойдется?', '5000');
        } while (!isNumber(num))
        sum += +num;
    }
    return sum;
};

let expensesAmount = getExpensesMonth();
let accumulatedMonth = getAccumulatedMonth();
let budgetDay = Math.round(accumulatedMonth / 30);

const getStatusIncome = function() {
    switch (true) {
        case (budgetDay >= 1200):
            console.log('У вас высокий уровень дохода');
            break;
        case ((budgetDay >= 600) && (budgetDay < 1200)):
            console.log('У вас средний уровень дохода');
            break;
        case ((budgetDay < 600) && (budgetDay >= 0)):
            console.log('К сожалению у вас уровень дохода ниже среднего');
            break;
        case (budgetDay < 0):
            console.log('Что то пошло не так');
            break;
    }
}

const showTypeOf = function(data) {
    console.log(data, typeof(data));
}

function getAccumulatedMonth() {
    return (money - expensesAmount);
}
const getTargetMonth = function() {

    if ((mission / accumulatedMonth) > 0) {
        console.log('Цель будет достигнута через ' + Math.round(mission / accumulatedMonth) + ' месяцев.');
    } else {
        console.log('Цель не будет достигнута');
    }
}

// Вывод на экран
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
console.log('Расходы за месяц: ', expensesAmount);
console.log('Возможные расходы за месяц: ', arr);
getTargetMonth();
console.log('Бюджет на день: ', budgetDay);
getStatusIncome();