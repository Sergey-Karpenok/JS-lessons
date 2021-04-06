'use strict';
let money = 1000000;
let income = 'Инвестиции';
let addExpenses = 'Комунальные расходы, Детский сад, Алименты';
let deposit = true;
let mission = 700000;
let period = 6;
let arr = addExpenses.toLowerCase().split(',');

money = +prompt('Ваш месячный доход?', '50000');
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Детский сад, Алименты');
deposit = confirm('Есть ли у вас депозит в банке?');

let expenses1 = prompt('Введите обязательную статью расходов?', 'Комунальные расходы');
let amount1 = +prompt('Во сколько это обойдется?', '5000');
let expenses2 = prompt('Введите обязательную статью расходов?', 'Интернет');
let amount2 = +prompt('Во сколько это обойдется?', '5000');
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

const getExpensesMonth = function() {
    return (amount1 + amount2);
}

function getAccumulatedMonth() {
    return money - (amount1 + amount2);
}
const getTargetMonth = function() {
    return Math.round(mission / accumulatedMonth);
}

// Вывод на экран
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
console.log('Расходы за месяц: ', getExpensesMonth());
console.log('Возможные расходы за месяц: ', arr);
console.log('Цель будет достигнута через ' + getTargetMonth() + ' месяцев.');
console.log('Бюджет на день: ', budgetDay);
getStatusIncome();