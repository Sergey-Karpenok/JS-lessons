let money = 100000;
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