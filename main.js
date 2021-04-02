let money, income, addExpenses, deposit, mission, period, budgetDay;

money = 100000;
income = 'Инвестиции';
addExpenses = 'Комунальные расходы, Детский сад, Алименты';
deposit = true;
mission = 700000;
period = 6;

console.log('money, income, depozit: ', money, income, deposit);
console.log('Длина строки addExpenses: ', addExpenses.length);
console.log('Период равен ' + period + ' месяцев.' + ' Цель заработать ' + mission + ' рублей');
console.log('addExpenses: ', addExpenses.toLowerCase());

let arr = addExpenses.toLowerCase().split(',');
console.log('Массив: ', arr);

budgetDay = (money / 30);
console.log('budgetDay: ', budgetDay);