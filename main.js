'use strict';
let money = 1000000;
let income = 'Инвестиции';
let addExpenses = 'Комунальные расходы, Детский сад, Алименты';
let deposit = true;
let mission = 700000;
let period = 6;

console.log('money, income, depozit: ', money, income, deposit);
console.log('Длина строки addExpenses: ', addExpenses.length);
console.log('Период равен ' + period + ' месяцев.' + ' Цель заработать ' + mission + ' рублей');
console.log('addExpenses: ', addExpenses.toLowerCase());

let arr = addExpenses.toLowerCase().split(',');
console.log('Массив: ', arr);

let budgetDay = (money / 30);
console.log('budgetDay: ', Math.round(budgetDay));

money = +prompt('Ваш месячный доход?');
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
deposit = confirm('Есть ли у вас депозит в банке?');
let expenses1 = prompt('Введите обязательную статью расходов?');
let expenses2 = prompt('Введите обязательную статью расходов?');
let amount1 = +prompt('Во сколько это обойдется?');
let amount2 = +prompt('Во сколько это обойдется?');

let budjetMonth = (money - (amount1 + amount2));
console.log('budjetMonth: ', budjetMonth);

console.log('Цель: ' + mission + ' руб.' + ' Будет достигнута через: ' + Math.round(mission / budjetMonth) + ' месяцев');
budgetDay = Math.floor(budjetMonth / 12);

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